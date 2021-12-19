import React, {useMemo, useState} from 'react';
import ProfileNavigationBar from "./ui/ProfileNavigationBar";
import AllNft from "./nft/AllNft";
import ListedNft from "./nft/ListedNft";
import MintedNft from "./nft/MintedNft";
import History from "./nft/History";

const Profile = () => {

    const [activeTab, setActiveTab] = useState('My NFT')

    const tabItems = useMemo(
        () => [
            {title: 'My NFT', link: '/profile-nft/all'},
            {title: 'My Listed NFT', link: '/profile-nft/listed'},
            {title: 'My Minted NFT', link: '/profile-nft/minted'},
            {title: 'My History', link: '/profile-nft/history'},
        ], []
    )

    const activePage = {
        'My NFT': <AllNft/>,
        'My Listed NFT': <ListedNft/>,
        'My Minted NFT': <MintedNft/>,
        'My History': <History/>
    }

    return (
        <div className="bg-light_white space-y-10">
            <ProfileNavigationBar setActiveTab={setActiveTab} activeTab={activeTab} tabItems={tabItems}/>
            {activePage[activeTab]}
        </div>
    );
};

export default Profile;