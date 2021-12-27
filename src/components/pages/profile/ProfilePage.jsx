import React, {useState} from 'react';
import ProfileNavigationBar from "./ui/ProfileNavigationBar";
import AllNft from "./nft/AllNft";
import ListedNft from "./nft/ListedNft";
import MintedNft from "./nft/MintedNft";
import History from "./nft/History";

const ProfilePage = ({profilePage}) => {
    const [activeTab, setActiveTab] = useState('My NFT')

    const activePage = {
        'My NFT': <AllNft/>,
        'My Listed NFT': <ListedNft/>,
        'My Minted NFT': <MintedNft/>,
        'My History': <History/>
    }

    return (
        <div className="bg-light_white space-y-10">
            <ProfileNavigationBar setActiveTab={setActiveTab}
                                  activeTab={activeTab}
                                  tabs={profilePage.tabs}/>
            {activePage[activeTab]}
        </div>
    );
};

export default ProfilePage;