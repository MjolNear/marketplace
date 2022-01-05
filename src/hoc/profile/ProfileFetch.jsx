import React, {useEffect} from 'react';
import ProfilePage from "../../components/pages/profile/ProfilePage";

const ProfileFetch = ({profile, changeProfileTab, fetchMyNfts, clearProfileState, accountId}) => {

    useEffect(() => {
        fetchMyNfts(accountId)
        return () => clearProfileState()
    }, [])

    return <ProfilePage profile={profile} changeProfileTab={changeProfileTab}/>
};

export default ProfileFetch;