import React, {useCallback} from 'react';
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../../../utils/string";
import {convertToMarketToken, TokenPriceRange, TokenSortOption} from "../../../../graphql/utils";
import PaginationCardList from "../../../../components/CardList/PaginationCardList";
import {useAccountMarketTokens} from "../../../../hooks/graphql";

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
    const {tokens, loading, hasMore, onLoadMore} = useAccountMarketTokens(accountId, limit, sort, priceRange)
    return <PaginationCardList tokens={tokens}
                               loading={loading}
                               hasMore={hasMore}
                               onLoadMore={onLoadMore}
    />
};

export default ProfileFilterMarketTokens;