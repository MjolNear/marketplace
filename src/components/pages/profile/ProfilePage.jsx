import React from 'react';
import ProfileNavigationBar from "./navbar/ProfileNavigationBar";
import MyNfts from "./nft/MyNfts";

const ProfilePage = ({profile, changeProfileTab}) => {
    return (
        <div className="bg-light_white space-y-10 pb-4 min-h-screen">
            <ProfileNavigationBar onChangeTab={changeProfileTab}
                                  activeTab={profile.activeTab}
                                  tabs={profile.tabs}/>

            <MyNfts nfts={profile.tags} fetching={profile.fetching}/>
        </div>
    );
};

export default ProfilePage;