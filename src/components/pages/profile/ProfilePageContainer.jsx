import React from 'react';
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {changeProfileTab, fetchHistory, fetchNfts} from "../../../redux/actions/profile";

const mapStateToProps = (state) => ({
    profile: state.profile
})

const mapDispatchToProps = {
    changeProfileTab,
    fetchNfts,
    fetchHistory
}

export const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage)