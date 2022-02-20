import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import CardListLoader from "./CardListLoader";
import CardGrid from "./CardGrid";
import {ScrollPosition, trackWindowScroll} from "react-lazy-load-image-component";
import {GridToken} from "../../business-logic/models/nft";


interface PropTypes {
    tokens: GridToken[],
    hasMore: boolean,
    loading: boolean,
    onLoadMore: () => any,
    isCollectionNFTs?: boolean
    scrollPosition: ScrollPosition
}

const PaginationCardList: React.FC<PropTypes> = ({
    tokens,
    hasMore,
    loading,
    onLoadMore,
    scrollPosition,
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
                      scrollPosition={scrollPosition}/>
        </InfiniteScroll>
    );
};

export default trackWindowScroll(PaginationCardList);