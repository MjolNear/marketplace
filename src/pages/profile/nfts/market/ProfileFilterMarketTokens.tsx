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
    const {data, loading, fetchMore} = useUserMarketTokensQuery({
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
    const canLoadMore = tokens.length !== 0 && tokens.length % limit === 0

    const onLoadMore = useCallback(() => fetchMore({
        variables: {
            offset: tokens.length
        }
    }), [tokens])

    return <PaginationCardList tokens={tokens}
                               loading={loading}
                               hasMore={canLoadMore}
                               onLoadMore={onLoadMore}/>
};

export default ProfileFilterMarketTokens;