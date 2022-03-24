import React, {memo} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import CardListLoader from "./CardListLoader";
import CardGrid from "./CardGrid";
import {GridToken} from "../../business-logic/models/nft";


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
            loader={<CardListLoader/>}
            dataLength={tokens.length}
        >
            <CardGrid tokens={tokens}
                      fetching={loading}
                      isCollectionNFTs={isCollectionNFTs}
            />
        </InfiniteScroll>
    );
};

export default memo(PaginationCardList);