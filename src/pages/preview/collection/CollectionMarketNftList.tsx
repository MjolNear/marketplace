import React from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import NotFound404Page from "../../NotFound404";
import {TokenPriceRange, TokenSortName, tokenSortOptions} from "../../../graphql/utils";
import {useCollectionMarketTokens} from "../../../hooks/graphql";

interface CollectionMarketNftListProps {
    collectionContract: string
    collectionId: string
    priceRange: TokenPriceRange,
    sort: TokenSortName
}

const CollectionMarketNftList: React.FC<CollectionMarketNftListProps> = ({
    collectionContract,
    collectionId,
    sort,
    priceRange
}) => {
    const LIMIT = 12
    const {
        data, loading, hasMore, onLoadMore
    } = useCollectionMarketTokens(LIMIT, tokenSortOptions[sort], priceRange, collectionContract, collectionId)

    console.log(`loading = ${loading}, hasMore = ${hasMore}, length = ${data.length}`)

    if (!collectionContract) {
        return <NotFound404Page/>
    }

    return (
        <PaginationCardList tokens={data}
                            loading={loading}
                            hasMore={hasMore}
                            isCollectionNFTs={true}
                            onLoadMore={onLoadMore}
        />
    );
};

export default CollectionMarketNftList;