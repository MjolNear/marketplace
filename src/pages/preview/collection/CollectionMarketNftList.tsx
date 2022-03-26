import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import NotFound404Page from "../../NotFound404";
import {
    CollectionMarketTokensQuery,
    MarketToken_OrderBy,
    OrderDirection,
    useCollectionMarketTokensQuery
} from "../../../graphql/generated/graphql";
import {convertToMarketToken, TokenPriceRange, TokenSortOption} from "../../../graphql/utils";
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

    const {data, loading, fetchMore} = useCollectionMarketTokensQuery({
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
    const canLoadMore = tokens.length !== 0 && tokens.length % limit === 0

    const onLoadMore = useCallback(() => fetchMore({
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