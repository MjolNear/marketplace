import React from 'react';
import NavigationBar from "../ui/NavigationBar";
import UserNFT from "../../UserNFT";

const ListedNft = () => {
    return (
        <div className="bg-light_white">
            <NavigationBar/>
            <UserNFT/>
        </div>
    );
};

export default ListedNft;