import React, {useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import CardListLoader from "../Card/CardListLoader";
import CardGrid from "./CardGrid";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchMarketNfts} from "../../state/explore/nfts/thunk";
import {exploreNftsSlice} from "../../state/explore/nfts/slice";
import DarkBlueMjolText from "../Common/text/DarkBlueMjolText";
import {ScrollPosition, trackWindowScroll} from "react-lazy-load-image-component";


interface PropTypes {
    scrollPosition: ScrollPosition
}

const CardList: React.FC<PropTypes> = ({scrollPosition}) => {

    const {nfts, hasMore, fetching, from, limit} = useAppSelector(state => state.explore.nfts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMarketNfts(from, limit))
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
            className={nfts.length !== 0 ? "space-y-6 lg:space-y-7 2xl:space-y-10" : ""}
            loader={<CardListLoader length={4}/>}
            dataLength={nfts.length}
            endMessage={<DarkBlueMjolText text="No more items on market"/>}
        >
            <CardGrid nfts={nfts} scrollPosition={scrollPosition}/>
        </InfiniteScroll>
    );
};

export default trackWindowScroll(CardList);