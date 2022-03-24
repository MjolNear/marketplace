import React, {memo, useCallback, useState} from 'react';
import {MarketTokensQuery, useMarketTokensQuery} from "../../../graphql/generated/graphql";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../../utils/string";
import {convertToMarketToken, TokenPriceRange, TokenSortOption} from "../../../graphql/utils";
import PaginationCardList from "../../../components/CardList/PaginationCardList";

interface ExploreFilterTokens {
    limit: number,
    priceRange: TokenPriceRange,
    sort: TokenSortOption
}

const ExploreFilterTokens: React.FC<ExploreFilterTokens> = ({
    limit,
    priceRange,
    sort
}) => {
    const [hasMore, setHasMore] = useState(true)

    const {data, loading, fetchMore} = useMarketTokensQuery({
        nextFetchPolicy: "network-only",
        fetchPolicy: "network-only",
        variables: {
            offset: 0,
            limit,
            orderBy: sort.by,
            orderDirection: sort.direction,
            priceFrom: priceRange.from || MIN_ITEM_YOCTO_PRICE,
            priceTo: priceRange.to || MAX_ITEM_YOCTO_PRICE
        }
    })

    const tokens = data?.marketTokens.map(convertToMarketToken) || []
    const canLoadMore = loading || hasMore && tokens.length !== 0 && tokens.length % limit === 0

    const updateQuery = useCallback((
        previousQueryResult: MarketTokensQuery,
        options: { fetchMoreResult?: MarketTokensQuery }
    ) => {
        const fetchMoreResult = options.fetchMoreResult
        if (!fetchMoreResult) {
            setHasMore(false)
            return previousQueryResult;
        }
        const previousTokens = previousQueryResult.marketTokens;
        const fetchMoreTokens = fetchMoreResult.marketTokens;
        if (fetchMoreTokens.length !== limit) {
            setHasMore(false)
        }
        fetchMoreResult.marketTokens = previousTokens.concat(fetchMoreTokens)
        return {...fetchMoreResult}
    }, [])

    const onLoadMore = useCallback(() => fetchMore({
        updateQuery,
        variables: {
            offset: tokens.length
        }
    }), [tokens])

    return <PaginationCardList tokens={tokens}
                               loading={loading}
                               hasMore={canLoadMore}
                               onLoadMore={onLoadMore}/>
};

export default memo(ExploreFilterTokens);