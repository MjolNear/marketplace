import React, {useEffect} from 'react';
import ProfilePage from "../../components/pages/profile/ProfilePage";

const ProfileFetch = ({profile, changeProfileTab, fetchMyNfts}) => {

    useEffect(() => {
        fetchMyNfts('turk.near')
    }, [])

    return <ProfilePage profile={profile} changeProfileTab={changeProfileTab}/>
};

export default ProfileFetch;