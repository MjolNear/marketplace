import React from 'react';
import {useCollections} from "../../../hooks/graphql/collections";
import PaginationCollectionList from "../../../components/CollectionList/PaginationCollectionList";

const ExploreFilterCollections = () => {
    const LIMIT = 12
    const {data, loading, hasMore, onLoadMore} = useCollections(LIMIT)

    return (
        <PaginationCollectionList collections={data}
                                  loading={loading}
                                  hasMore={hasMore}
                                  onLoadMore={onLoadMore}
        />
    );
};

export default ExploreFilterCollections;