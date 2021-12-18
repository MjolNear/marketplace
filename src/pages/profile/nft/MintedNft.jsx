import React from 'react';
import NavigationBar from "../ui/NavigationBar";
import UserNFT from "../../UserNFT";

const MintedNft = () => {
    return (
        <div className="bg-light_white pb-5">
            <NavigationBar/>
            <UserNFT/>
        </div>
    );
};

export default MintedNft;