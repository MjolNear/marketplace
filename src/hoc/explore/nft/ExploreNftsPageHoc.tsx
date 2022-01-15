import React, {useEffect, useState} from 'react';
import ExploreNftsPage from "../../../components/Pages/explore/nft/ExploreNftPage";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {exploreNftsSlice} from "../../../state/explore/nfts/slice";
import {fetchMarketNfts} from "../../../state/explore/nfts/thunk";
import NftFilters from "../../../components/Pages/explore/nft/NftFilters";
import CardList from "../../../components/CardList/CardList";

const ExploreNftsPageHoc = () => {

    const {total} = useAppSelector(state => state.explore.nfts)

    return (
        <div>
            <NftFilters total={total}/>
            <div className="my-5 ml-10 font-mono text-center text-gray-600">
                Total items: {total}
            </div>
            <CardList/>
        </div>
    )

};

export default ExploreNftsPageHoc;