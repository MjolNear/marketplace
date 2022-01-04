import React from 'react';
import NftFilters from "./NftFilters";
import NftsGrid from "../../profile/nft/MyNfts";

const ExploreNftPage = ({nfts, fetching}) => {
    return (
        <div className="bg-mjol-white space-y-6">
            {/*<NftFilters/>*/}
            <NftsGrid nfts={nfts} fetching={fetching}/>
        </div>
    );
};

export default ExploreNftPage;