import React from 'react';
import {TokenPriceRange, TokenSortOption} from "../../../graphql/utils";
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useMarketTokens} from "../../../hooks/graphql";


interface ExploreFilterTokens {
    limit: number,
    priceRange: TokenPriceRange,
    sort: TokenSortOption
}

const ExploreFilterTokens: React.FC<ExploreFilterTokens> = ({
    limit,
    priceRange,
    sort
}) => {
    const {tokens, loading, hasMore, onLoadMore} = useMarketTokens(limit, sort, priceRange)
    return <PaginationCardList tokens={tokens}
                               onLoadMore={onLoadMore}
                               hasMore={hasMore}
                               loading={loading}
    />
};

export default ExploreFilterTokens;