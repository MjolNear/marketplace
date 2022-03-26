import React, {useCallback, useMemo, useState} from 'react';
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
import {MJOL_CONTRACT_ID} from "../../../business-logic/near/enviroment/contract-names";


interface CollectionMarketNftListProps {
    collectionContract?: string
    collectionId?: string
}


const CollectionMarketNftList: React.FC<CollectionMarketNftListProps> = ({
    collectionContract,
    collectionId
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
            collectionId: collectionContract === MJOL_CONTRACT_ID ? collectionId : null,
            offset: 0,
            limit,
            orderBy: MarketToken_OrderBy.ListingTimestamp,
            orderDirection: OrderDirection.Desc,
            priceFrom: MIN_ITEM_YOCTO_PRICE,
            priceTo: MAX_ITEM_YOCTO_PRICE
        }
    })

    const tokens = useMemo(
        () => data?.collectionMarketTokens.map(token => convertToMarketToken(token)) || [],
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