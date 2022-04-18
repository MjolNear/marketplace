import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import ActivityRowLoader from "./Loader/ActivityRowLoader";
import ActivityListLoader from "./Loader/ActivityListLoader";

interface PaginatedActivityListProps {
    dataLength: number,
    hasMore: boolean,
    loading: boolean,
    onLoadMore: () => any,
}

const PaginationActivityList: React.FC<PaginatedActivityListProps> = ({
    dataLength,
    hasMore,
    loading,
    onLoadMore,
    children
}) => {
    return (
        <InfiniteScroll next={onLoadMore}
                        scrollThreshold="200px"
                        hasMore={hasMore}
                        className="py-3 grid-grid-cols-1 gap-1 justify-center max-w-[1050px] mx-auto px-2 sm:px-4"
                        loader={<ActivityListLoader length={12}/>}
                        dataLength={dataLength}
        >
            {children}
            {!loading && !hasMore && dataLength === 0 &&
                <div className="text-center font-archivo font-semibold">
                    Activities not found
                </div>
            }
        </InfiniteScroll>
    );
};

export default PaginationActivityList;