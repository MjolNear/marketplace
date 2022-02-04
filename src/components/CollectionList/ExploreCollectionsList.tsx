import React, {useEffect} from 'react';
import {ScrollPosition, trackWindowScroll} from "react-lazy-load-image-component";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {fetchCollections} from "../../state/explore/collections/thunk";
import CollectionList from "./CollectionList";
import CollectionListLoader from "./CollectionListLoader";
import {exploreCollectionsSlice} from "../../state/explore/collections/slice";

interface PropTypes {
    scrollPosition: ScrollPosition
}

const ExploreCollectionList: React.FC<PropTypes> = ({scrollPosition}) => {

    const {collections, hasMore, fetching, from, limit} = useAppSelector(state => state.explore.collections)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCollections(from, limit))
        return () => {
            dispatch(exploreCollectionsSlice.actions.reset())
        }
    }, [])

    const fetchNextTokens = () => {
        if (hasMore && !fetching) {
            return dispatch(fetchCollections(from, limit))
        }
    }

    return (
        <InfiniteScroll
            next={fetchNextTokens}
            scrollThreshold="100px"
            hasMore={hasMore}
            className={"py-5 " + (collections.length !== 0 ? "space-y-6 lg:space-y-7 2xl:space-y-10" : "")}
            loader={<CollectionListLoader/>}
            dataLength={collections.length}
        >
            <CollectionList collections={collections}/>
        </InfiniteScroll>
    );
};

export default trackWindowScroll(ExploreCollectionList);