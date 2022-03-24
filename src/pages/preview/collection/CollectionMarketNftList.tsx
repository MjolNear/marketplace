import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import NotFound404Page from "../../NotFound404";
import {
    CollectionMarketTokensQuery,
    MarketToken_OrderBy,
    OrderDirection,
    useCollectionMarketTokensQuery
} from "../../../graphql/generated/graphql";
import {convertToMarketToken} from "../../../graphql/utils";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../../utils/string";


interface CollectionMarketNftListProps {
    collectionContract?: string
}


const CollectionMarketNftList: React.FC<CollectionMarketNftListProps> = ({
    collectionContract
}) => {

    const limit = 12
    const [hasMore, setHasMore] = useState(true)

    // const initialSort = tokenSortOptions[TokenSortName.RecentlyAdded]
    // const initialPriceRange: TokenPriceRange = {}
    // const initialSearchText: SearchText = {}
    //
    // const [filters, setFilters] = useState({
    //     priceRange: initialPriceRange,
    //     sort: initialSort,
    //     search: initialSearchText
    // })

    const {data, loading, fetchMore} = useCollectionMarketTokensQuery({
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only",
        variables: {
            contractId: collectionContract || "",
            offset: 0,
            limit,
            orderBy: MarketToken_OrderBy.ListingTimestamp,
            orderDirection: OrderDirection.Desc,
            priceFrom: MIN_ITEM_YOCTO_PRICE,
            priceTo: MAX_ITEM_YOCTO_PRICE
        }
    })

    const tokens = useMemo(
        () => data?.collectionMarketTokens.map(convertToMarketToken) || [],
        [data]
    )

    const canLoadMore = useMemo(() =>
            loading || hasMore && tokens.length !== 0 && tokens.length % limit === 0,
        [loading, tokens, hasMore]
    )

    const updateQuery = useCallback((
        previousQueryResult: CollectionMarketTokensQuery,
        options: { fetchMoreResult?: CollectionMarketTokensQuery }
    ) => {
        const fetchMoreResult = options.fetchMoreResult
        if (!fetchMoreResult) {
            setHasMore(false)
            return previousQueryResult;
        }
        const previousTokens = previousQueryResult.collectionMarketTokens;
        const fetchMoreTokens = fetchMoreResult.collectionMarketTokens;
        setHasMore(fetchMoreTokens.length === limit)
        fetchMoreResult.collectionMarketTokens = previousTokens.concat(fetchMoreTokens);
        return {...fetchMoreResult}
    }, [])

    const onLoadMore = useCallback(() => fetchMore({
        updateQuery,
        variables: {
            offset: tokens.length
        }
    }), [tokens])

    if (!collectionContract) {
        return <NotFound404Page/>
    }

    return (
        <PaginationCardList tokens={tokens}
                            loading={loading}
                            hasMore={canLoadMore}
                            isCollectionNFTs={true}
                            onLoadMore={onLoadMore}
        />
    );
};

export default CollectionMarketNftList;