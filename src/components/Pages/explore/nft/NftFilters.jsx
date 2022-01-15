import React from 'react';
import BlueShadowContainer from "../../../Common/shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../Common/text/DarkBlueTitle";
import SearchInput from "../../../Filter/search/SearchInput";
import ToggleFilter from "../../../Filter/toggle/ToggleFilter";

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