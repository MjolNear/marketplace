import React from 'react';
import ProfileNavigationBar from "./ui/ProfileNavigationBar";
import UserNfts from "./nft/UserNfts";

const ProfilePage = ({profile, changeProfileTab, fetchNfts, fetchHistory}) => {
    return (
        <div className="bg-light_white space-y-10 pb-10">
            <ProfileNavigationBar onChangeTab={changeProfileTab}
                                  activeTab={profile.activeTab}
                                  tabs={profile.tabs}/>
            {<UserNfts/>}
        </div>
    );
};

export default ProfilePage;