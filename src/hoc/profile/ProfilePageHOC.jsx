import React from 'react';
import {connect} from "react-redux";
import {changeProfileTab, pushNFT, setFetching, setHistory, setNfts} from "../../state/actions/profile";
import ProfileFetchHOC from "./ProfileFetchHOC";


const mapStateToProps = (state) => ({
    profile: state.profile
})

const mapDispatchToProps = {
    changeProfileTab,
    pushNFT,
    setFetching,
    setNfts,
    setHistory
}

const ProfilePageHOC = connect(mapStateToProps, mapDispatchToProps)(ProfileFetchHOC)

export default ProfilePageHOC;