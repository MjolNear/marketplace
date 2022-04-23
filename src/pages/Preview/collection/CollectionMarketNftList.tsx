import React from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import NotFound404Page from "../../NotFound404";
import {TokenPriceRange, TokenSortName, tokenSortOptions} from "../../../graphql/types";
import {useCollectionMarketTokens} from "../../../hooks/graphql";
import {MJOL_CONTRACT_ID} from "../../../near/enviroment/contract-names";

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
    } = useCollectionMarketTokens(
        LIMIT,
        tokenSortOptions[sort],
        priceRange,
        collectionContract,
        collectionContract === MJOL_CONTRACT_ID ? collectionId : null
    )

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