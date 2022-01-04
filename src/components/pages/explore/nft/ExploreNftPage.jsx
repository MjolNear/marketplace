import React from 'react';
import NftFilters from "./NftFilters";
import MyNfts from "../../profile/nft/MyNfts";

const ExploreNftPage = ({profile}) => {
    return (
        <div className="bg-mjol-white space-y-6">
            <NftFilters/>
            <MyNfts nfts={profile.tags} fetching={profile.fetching}/>
        </div>
    );
};

export default ExploreNftPage;