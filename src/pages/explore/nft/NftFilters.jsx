import React from 'react';
import BlueShadowContainer from "../../../components/Common/shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/text/DarkBlueTitle";
import SearchInput from "../../../components/Filter/search/SearchInput";

const NftFilters = () => {
    return (
        <BlueShadowContainer>
            <div className="pb-10 px-4 space-y-8">
                <DarkBlueTitle title="Explore NFTs"/>
                <div className="flex justify-center">
                    <SearchInput placeholder="Search by NFT name"/>
                </div>
            </div>
        </BlueShadowContainer>
    );
};

export default NftFilters;