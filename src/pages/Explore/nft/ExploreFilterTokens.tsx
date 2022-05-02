import React from 'react';
import {TokenPriceRange, TokenSortName, tokenSortOptions} from "../../../graphql/types";
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useMarketTokens} from "../../../hooks/graphql";


interface ExploreFilterTokensProps {
    priceRange: TokenPriceRange,
    sort: TokenSortName
}

const ExploreFilterTokens: React.FC<ExploreFilterTokensProps> = ({
    priceRange,
    sort
}) => {
    const LIMIT = 24
    const {data, loading, hasMore, onLoadMore} = useMarketTokens(LIMIT, tokenSortOptions[sort], priceRange)

    return <PaginationCardList tokens={data}
                               onLoadMore={onLoadMore}
                               hasMore={hasMore}
                               loading={loading}
    />
};

export default ExploreFilterTokens;