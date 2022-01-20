import React from 'react';
import {useAppSelector} from "../../../hooks/redux";


import NftFilters from "./NftFilters";
import CardList from "../../../components/CardList/CardList";

const ExploreNftsPage = () => {

    const totalItems = useAppSelector(state => state.explore.nfts.total)

    return (
        <>
            <NftFilters/>
            <div className="my-5 font-mono text-center text-gray-600">
                Total items: {totalItems}
            </div>
            <CardList/>
        </>
    )

};

export default ExploreNftsPage;