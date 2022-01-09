import React, {useEffect} from 'react';
import ExploreNftsPage from "../../../components/pages/explore/nft/ExploreNftPage";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {exploreNftsSlice} from "../../../state/explore/nfts/slice";
import {fetchMarketNfts} from "../../../state/explore/nfts/thunk";

const ExploreNftsPageHoc = () => {

    const {nfts, fetching} = useAppSelector(state => state.explore.nfts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMarketNfts())
        return () => dispatch(exploreNftsSlice.actions.reset())
    }, [])

    return <ExploreNftsPage nfts={nfts} fetching={fetching}/>
};

export default ExploreNftsPageHoc;