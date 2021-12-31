import React from 'react';
import {connect} from "react-redux";
import {changeProfileTab, pushNFT, setFetching, setHistory, setNfts} from "../../state/actions/profile";
import ProfileFetchContainer from "./ProfileFetchContainer";


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

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileFetchContainer)