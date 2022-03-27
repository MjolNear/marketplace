import React from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useMarketTokensTextSearching} from "../../../hooks/graphql";

interface ExploreSearchTokensProps {
    limit: number,
    searchQuery: string
}

const ExploreSearchTokens: React.FC<ExploreSearchTokensProps> = ({
    limit,
    searchQuery
}) => {
    const {tokens, hasMore, loading, onLoadMore} = useMarketTokensTextSearching(searchQuery,limit)
    return <PaginationCardList tokens={tokens}
                               loading={loading}
                               hasMore={hasMore}
                               onLoadMore={onLoadMore}
    />
};

export default ExploreSearchTokens;