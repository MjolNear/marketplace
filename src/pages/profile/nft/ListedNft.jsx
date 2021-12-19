import React from 'react';
import ProfileNavigationBar from "../ui/ProfileNavigationBar";
import UserNFT from "../../UserNFT";

const ListedNft = () => {
    return (
        <div className="bg-light_white pb-5">
            <ProfileNavigationBar/>
            <UserNFT/>
        </div>
    );
};

export default ListedNft;