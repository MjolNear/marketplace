import React, {useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import CardListLoader from "./CardListLoader";
import CardGrid from "./CardGrid";
import {useAppDispatch} from "../../hooks/redux";
import {ScrollPosition, trackWindowScroll} from "react-lazy-load-image-component";
import {Nft} from "../../business-logic/models/nft";


interface PropTypes {
    nfts: Nft[],
    hasMore: boolean,
    fetching: boolean,
    from: number,
    limit: number,
    fetcher: (from: number, limit: number) => any,
    reset: () => any
    scrollPosition: ScrollPosition
}

const PaginationCardList: React.FC<PropTypes> = ({
    nfts,
    hasMore,
    fetching,
    from,
    limit,
    fetcher,
    reset,
    scrollPosition
}) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetcher(from, limit))
        return () => {
            dispatch(reset())
        }
    }, [])

    const fetchNextTokens = () => {
        if (hasMore && !fetching) {
            return dispatch(fetcher(from, limit))
        }
    }

    return (
        <InfiniteScroll
            next={fetchNextTokens}
            scrollThreshold="100px"
            hasMore={hasMore}
            className={"py-5 " + (nfts.length !== 0 ? "space-y-6 lg:space-y-7 2xl:space-y-10" : "")}
            loader={<CardListLoader/>}
            dataLength={nfts.length}
        >
            <CardGrid nfts={nfts} scrollPosition={scrollPosition} fetching={fetching}/>
        </InfiniteScroll>
    );
};

export default trackWindowScroll(PaginationCardList);