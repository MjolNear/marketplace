import React, {memo, useCallback, useState} from 'react';
import {MarketTokensSearchQuery, useMarketTokensSearchQuery} from "../../../graphql/generated/graphql";
import {convertToMarketToken} from "../../../graphql/utils";
import PaginationCardList from "../../../components/CardList/PaginationCardList";

interface ExploreSearchTokensProps {
    limit: number,
    searchQuery: string
}

const ExploreSearchTokens: React.FC<ExploreSearchTokensProps> = ({
    limit,
    searchQuery
}) => {
    const [hasMore, setHasMore] = useState(true)

    const {data, loading, fetchMore} = useMarketTokensSearchQuery({
        nextFetchPolicy: "network-only",
        fetchPolicy: "network-only",
        variables: {
            offset: 0,
            limit,
            text: searchQuery
        }
    })

    const tokens = data?.searchedMarketTokens.map(convertToMarketToken) || []
    const canLoadMore = loading || hasMore && tokens.length !== 0 && tokens.length % limit === 0

    const updateQuery = useCallback((
        previousQueryResult: MarketTokensSearchQuery,
        options: { fetchMoreResult?: MarketTokensSearchQuery }
    ) => {
        const fetchMoreResult = options.fetchMoreResult
        if (!fetchMoreResult) {
            setHasMore(false)
            return previousQueryResult;
        }
        const previousTokens = previousQueryResult.searchedMarketTokens;
        const fetchMoreTokens = fetchMoreResult.searchedMarketTokens;
        if (fetchMoreTokens.length !== limit) {
            setHasMore(false)
        }
        fetchMoreResult.searchedMarketTokens = previousTokens.concat(fetchMoreTokens)
        return {...fetchMoreResult}
    }, [])

    const onLoadMore = useCallback(() => fetchMore({
        updateQuery,
        variables: {
            offset: tokens.length
        }
    }), [tokens])

    return <PaginationCardList tokens={tokens}
                               loading={loading}
                               hasMore={canLoadMore}
                               onLoadMore={onLoadMore}/>
};

export default memo(ExploreSearchTokens);