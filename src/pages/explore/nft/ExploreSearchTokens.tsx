import React from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useMarketTokensTextSearching} from "../../../hooks/graphql";

interface ExploreSearchTokensProps {
    searchQuery: string
}

const ExploreSearchTokens: React.FC<ExploreSearchTokensProps> = ({
    searchQuery
}) => {
    const LIMIT = 24
    const {data, hasMore, loading, onLoadMore} = useMarketTokensTextSearching(searchQuery, LIMIT)

    return <PaginationCardList tokens={data}
                               loading={loading}
                               hasMore={hasMore}
                               onLoadMore={onLoadMore}
    />
};

export default ExploreSearchTokens;