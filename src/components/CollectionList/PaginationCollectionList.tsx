import React from 'react';
import {GridCollection} from "../../business-logic/types/collection";
import CollectionListLoader from "./CollectionListLoader";
import CollectionsGrid from "./CollectionsGrid";
import InfiniteScroll from "react-infinite-scroll-component";

interface PaginationCollectionListProps {
    collections: GridCollection[],
    hasMore: boolean,
    loading: boolean,
    onLoadMore: () => any,
}

const PaginationCollectionList: React.FC<PaginationCollectionListProps>= ({
    collections,
    hasMore,
    loading,
    onLoadMore
}) => {
    return (
        <InfiniteScroll
            next={onLoadMore}
            scrollThreshold="100px"
            hasMore={hasMore}
            className={"py-5 " + (collections.length !== 0 ? "space-y-6 lg:space-y-7 2xl:space-y-10" : "")}
            loader={<></>}
            dataLength={collections.length}
        >
            <CollectionsGrid collections={collections} loading={loading}/>
            {loading && hasMore && <CollectionListLoader/>}
        </InfiniteScroll>
    );
};

export default PaginationCollectionList;