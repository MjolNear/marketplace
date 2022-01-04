import React, {useEffect} from 'react';
import ExploreNftsPage from "../../../components/pages/explore/nft/ExploreNftPage";

const ExploreNftsFetchHoc = ({profile, fetchMyNfts, clearProfileData}) => {

    useEffect(() => {
        fetchMyNfts('turk.near')
        return () => clearProfileData()
    }, [])

    return <ExploreNftsPage profile={profile}/>
};

export default ExploreNftsFetchHoc;