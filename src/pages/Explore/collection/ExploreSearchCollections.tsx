import React from 'react';
import {useCollectionsTextSearch} from "../../../hooks/graphql/collections";
import PaginationCollectionList from "../../../components/CollectionList/PaginationCollectionList";

interface ExploreSearchCollectionsProps {
    searchQuery: string
}

const ExploreSearchCollections: React.FC<ExploreSearchCollectionsProps> = ({
    searchQuery
}) => {
    const LIMIT = 12
    const {data, loading, hasMore, onLoadMore} = useCollectionsTextSearch(searchQuery, LIMIT)

    return (
        <PaginationCollectionList collections={data}
                                  loading={loading}
                                  hasMore={hasMore}
                                  onLoadMore={onLoadMore}
        />
    );
};

export default ExploreSearchCollections;