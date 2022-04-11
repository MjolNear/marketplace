import React from 'react';
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import {useMarketTokensTextSearching} from "../../../hooks/graphql";

interface ExploreSearchTokensProps {
    typing: boolean,
    limit: number,
    searchQuery: string
}

const ExploreSearchTokens: React.FC<ExploreSearchTokensProps> = ({
    limit,
    searchQuery,
    typing
}) => {
    const {tokens, hasMore, loading, onLoadMore} = useMarketTokensTextSearching(searchQuery, limit)
    return <PaginationCardList tokens={tokens}
                               loading={loading || typing}
                               hasMore={hasMore}
                               onLoadMore={onLoadMore}
    />
};

export default ExploreSearchTokens;