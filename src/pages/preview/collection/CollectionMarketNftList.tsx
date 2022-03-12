import React, {useEffect, useState} from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import NotFoundPage from "../../not-found/NotFoundPage";
import {fetchCollectionNfts} from "../../../state/preview/collection/thunk";
import {previewCollectionSlice} from "../../../state/preview/collection/slice";
import {
    MarketTokensQuery,
    useCollectionMarketTokensQuery
} from "../../../graphql/generated/graphql";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../../utils/string";
import {convertToMarketToken} from "../../../graphql/utils";
import {SearchText, TokenPriceRange, TokenSortName, tokenSortOptions} from "../../explore/nft/ExploreNftsPage";


interface Props {
    collectionContract?: string
}


const CollectionMarketNftList: React.FC<Props> = ({collectionContract}) => {

    const limit = 12
    const [hasMore, setHasMore] = useState(true)

    const initialSort = tokenSortOptions[TokenSortName.RecentlyAdded]
    const initialPriceRange: TokenPriceRange = {}
    const initialSearchText: SearchText = {}

    const [filters, setFilters] = useState({
        priceRange: initialPriceRange,
        sort: initialSort,
        search: initialSearchText
    })

    const {data, loading, fetchMore} = useCollectionMarketTokensQuery({
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only",
        variables: {
            contractId: collectionContract || "",
            offset: 0,
            limit: limit,
            orderBy: filters.sort.by,
            orderDirection: filters.sort.direction,
            priceFrom: filters.priceRange.from || MIN_ITEM_YOCTO_PRICE,
            priceTo: filters.priceRange.to || MAX_ITEM_YOCTO_PRICE
        }
    })

    const updateQuery = (
        previousQueryResult: MarketTokensQuery,
        options: { fetchMoreResult?: MarketTokensQuery }
    ) => {
        const fetchMoreResult = options.fetchMoreResult
        if (!fetchMoreResult) {
            return previousQueryResult;
        }
        const previousTokens = previousQueryResult.marketTokens;
        const fetchMoreTokens = fetchMoreResult.marketTokens;
        setHasMore(fetchMoreTokens.length === limit)
        fetchMoreResult.marketTokens = [...previousTokens, ...fetchMoreTokens];
        return {...fetchMoreResult}
    }

    const onLoadMore = (offset: number) => fetchMore({
        updateQuery,
        variables: {
            offset
        }
    })

    const tokens = data?.marketTokens.map(convertToMarketToken) || []

    useEffect(() => {
        setHasMore(true)
    }, [filters])

    if (!collectionContract) {
        return <NotFoundPage/>
    }

    return (
        <PaginationCardList tokens={tokens}
                            loading={loading}
                            hasMore={hasMore}
                            isCollectionNFTs={true}
                            onLoadMore={() => onLoadMore(tokens.length)}
        />
    );
};

export default CollectionMarketNftList;