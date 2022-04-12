import React from 'react';
import {TokenPriceRange, TokenSortOption} from "../../../../graphql/utils";
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
    const {data, loading, hasMore, onLoadMore} = useAccountMarketTokens(accountId, limit, sort, priceRange)
    return <PaginationCardList tokens={data}
                               loading={loading}
                               hasMore={hasMore}
                               onLoadMore={onLoadMore}
    />
};

export default ProfileFilterMarketTokens;