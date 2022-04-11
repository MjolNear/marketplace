import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import CardGrid from "./CardGrid";
import {GridToken} from "../../business-logic/types/nft";
import CardListLoader from "./CardListLoader";


interface PaginationCardListProps {
    tokens: GridToken[],
    hasMore: boolean,
    loading: boolean,
    onLoadMore: () => any,
    isCollectionNFTs?: boolean
}

const PaginationCardList: React.FC<PaginationCardListProps> = ({
    tokens,
    hasMore,
    loading,
    onLoadMore,
    isCollectionNFTs = false,
}) => {
    return (
        <InfiniteScroll
            next={onLoadMore}
            scrollThreshold="100px"
            hasMore={hasMore}
            className={"py-5 " + (tokens.length !== 0 ? "space-y-6 lg:space-y-7 2xl:space-y-10" : "")}
            loader={<></>}
            dataLength={tokens.length}
        >
            <CardGrid tokens={tokens}
                      loading={loading}
                      isCollectionNFTs={isCollectionNFTs}
            />
            {loading && hasMore && <CardListLoader/>}
        </InfiniteScroll>
    );
};

export default PaginationCardList;