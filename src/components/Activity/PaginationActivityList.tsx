import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import MjolLoader from "../Common/Loaders/MjolLoader";

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
                        className="py-2"
                        loader={<MjolLoader mt={5}/>}
                        dataLength={dataLength}
        >
            <div className="grid grid-cols-1 justify-center max-w-[1050px] mx-auto px-2 sm:px-4">
                {children}
                {!loading && !hasMore && dataLength === 0 &&
                    <div className="text-center font-archivo font-semibold">
                        Activities not found
                    </div>
                }
            </div>
        </InfiniteScroll>
    );
};

export default PaginationActivityList;