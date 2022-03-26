import React, {memo, useCallback, useEffect, useState} from 'react';
import {UserMarketTokensQuery, useUserMarketTokensQuery} from "../../../../graphql/generated/graphql";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../../../utils/string";
import {convertToMarketToken, TokenPriceRange, TokenSortOption} from "../../../../graphql/utils";
import PaginationCardList from "../../../../components/CardList/PaginationCardList";

interface ExploreFilterTokens {
    accountId: string,
    limit: number,
    priceRange: TokenPriceRange,
    sort: TokenSortOption
}

const ProfileFilterMarketTokens: React.FC<ExploreFilterTokens> = ({
    accountId,
    limit,
    priceRange,
    sort
}) => {
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        setHasMore(true)
    }, [sort, priceRange, limit, accountId])


    const {data, loading, fetchMore} = useUserMarketTokensQuery({
        nextFetchPolicy: "network-only",
        fetchPolicy: "network-only",
        variables: {
            account: accountId,
            offset: 0,
            limit,
            orderBy: sort.by,
            orderDirection: sort.direction,
            priceFrom: priceRange.from || MIN_ITEM_YOCTO_PRICE,
            priceTo: priceRange.to || MAX_ITEM_YOCTO_PRICE
        }
    })

    const tokens = data?.account?.marketTokens.map(convertToMarketToken) || []
    const canLoadMore = loading || hasMore && tokens.length !== 0 && tokens.length % limit === 0

    const updateQuery = useCallback((
        previousQueryResult: UserMarketTokensQuery,
        options: { fetchMoreResult?: UserMarketTokensQuery }
    ) => {
        const fetchMoreResult = options.fetchMoreResult
        if (!fetchMoreResult) {
            setHasMore(false)
            return previousQueryResult;
        }
        const previousTokens = previousQueryResult.account?.marketTokens || [];
        const fetchMoreTokens = fetchMoreResult.account?.marketTokens || [];
        if (fetchMoreTokens.length !== limit) {
            setHasMore(false)
        }
        return {
            ...fetchMoreResult, account: {
                ...fetchMoreResult.account,
                marketTokens: previousTokens.concat(fetchMoreTokens)
            }
        }
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

export default memo(ProfileFilterMarketTokens);