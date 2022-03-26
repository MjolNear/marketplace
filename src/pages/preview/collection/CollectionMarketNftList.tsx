import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import NotFound404Page from "../../NotFound404";
import {
    CollectionMarketTokensQuery,
    MarketToken_OrderBy,
    OrderDirection,
    useCollectionMarketTokensQuery
} from "../../../graphql/generated/graphql";
import {
    convertToMarketToken,
    TokenPriceRange,
    TokenSortName,
    TokenSortOption,
    tokenSortOptions
} from "../../../graphql/utils";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../../utils/string";
import {MJOL_CONTRACT_ID} from "../../../business-logic/near/enviroment/contract-names";


interface CollectionMarketNftListProps {
    collectionContract?: string
    collectionId?: string
    priceRange: TokenPriceRange,
    sort: TokenSortOption
}


const CollectionMarketNftList: React.FC<CollectionMarketNftListProps> = ({
    collectionContract,
    collectionId,
    sort,
    priceRange
}) => {
    const limit = 12

    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        setHasMore(true)
    }, [sort, priceRange, limit, collectionId, collectionContract])


    const {data, loading, fetchMore} = useCollectionMarketTokensQuery({
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only",
        variables: {
            contractId: collectionContract || "",
            collectionId: collectionContract === MJOL_CONTRACT_ID ? collectionId : null,
            offset: 0,
            limit,
            orderBy: sort.by,
            orderDirection: sort.direction,
            priceFrom: priceRange.from || MIN_ITEM_YOCTO_PRICE,
            priceTo: priceRange.to || MAX_ITEM_YOCTO_PRICE
        }
    })

    const tokens = data?.collectionMarketTokens.map(convertToMarketToken) || []
    const canLoadMore = loading || hasMore && tokens.length !== 0 && tokens.length % limit === 0

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
        if (fetchMoreTokens.length !== limit) {
            setHasMore(false)
        }
        fetchMoreResult.collectionMarketTokens = previousTokens.concat(fetchMoreTokens);
        return {...fetchMoreResult}
    }, [limit])

    const onLoadMore = useCallback(() => fetchMore({
        updateQuery,
        variables: {
            offset: tokens.length
        }
    }), [tokens, updateQuery])

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