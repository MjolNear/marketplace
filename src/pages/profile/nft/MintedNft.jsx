import React from 'react';
import NavigationBar from "../ui/NavigationBar";
import UserNFT from "../../UserNFT";

const MintedNft = () => {
    return (
        <div className="bg-light_white">
            <NavigationBar/>
            <UserNFT/>
        </div>
    );
};

export default MintedNft;