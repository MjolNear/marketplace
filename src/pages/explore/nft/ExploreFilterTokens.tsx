import React, {useCallback} from 'react';
import {TokenPriceRange, TokenSortName, tokenSortOptions} from "../../../graphql/utils";
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useMarketTokens} from "../../../hooks/graphql";


interface ExploreFilterTokens {
    priceRange: TokenPriceRange,
    sort: TokenSortName
}

const ExploreFilterTokens: React.FC<ExploreFilterTokens> = ({
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