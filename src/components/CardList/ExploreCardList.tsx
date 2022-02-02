import React, {useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import CardListLoader from "./CardListLoader";
import CardGrid from "./CardGrid";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchMarketNfts} from "../../state/explore/nfts/thunk";
import {exploreNftsSlice} from "../../state/explore/nfts/slice";
import {ScrollPosition, trackWindowScroll} from "react-lazy-load-image-component";


interface PropTypes {
    scrollPosition: ScrollPosition
}

const ExploreCardList: React.FC<PropTypes> = ({scrollPosition}) => {

    const {nfts, hasMore, fetching, from, limit} = useAppSelector(state => state.explore.nfts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMarketNfts(from, limit)).then()
        return () => {
            dispatch(exploreNftsSlice.actions.reset())
        }
    }, [])

    const fetchNextTokens = () => {
        if (hasMore && !fetching) {
            return dispatch(fetchMarketNfts(from, limit))
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
            <CardGrid nfts={nfts} scrollPosition={scrollPosition}/>
        </InfiniteScroll>
    );
};

export default trackWindowScroll(ExploreCardList);