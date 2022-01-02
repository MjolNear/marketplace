import React from 'react';
import {connect} from "react-redux";
import {changeProfileTab, fetchMyNfts} from "../../state/profile/actions";
import ProfileFetch from "./ProfileFetch";
import withAuthentication from "../withAuthentication";
import {compose} from "redux";
import withAccountId from "../withAccountId";


const mapStateToProps = (state) => ({
    profile: state.profile
})

const mapDispatchToProps = {
    changeProfileTab,
    fetchMyNfts,
}

export default compose(
    withAuthentication,
    withAccountId,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileFetch)