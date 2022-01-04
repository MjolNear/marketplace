import React from 'react';
import {connect} from "react-redux";
import {changeProfileTab, clearProfileData, fetchMyNfts} from "../../state/profile/actions";
import ProfileFetch from "./ProfileFetch";
import withAuthentication from "../withAuthentication";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    profile: state.profile
})

const mapDispatchToProps = {
    changeProfileTab,
    fetchMyNfts,
    clearProfileData
}

export default compose(
    withAuthentication,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileFetch)