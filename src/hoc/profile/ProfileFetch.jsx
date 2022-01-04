import React, {useEffect} from 'react';
import ProfilePage from "../../components/pages/profile/ProfilePage";

const ProfileFetch = ({profile, changeProfileTab, fetchMyNfts, clearProfileData, accountId}) => {

    useEffect(() => {
        fetchMyNfts(accountId)
        return () => clearProfileData()
    }, [])

    return <ProfilePage profile={profile} changeProfileTab={changeProfileTab}/>
};

export default ProfileFetch;