import React from 'react';
import {connect} from "react-redux";
import {changeProfileTab, pushNFT, setFetching, setHistory, setNfts} from "../../state/profile/actions";
import ProfileFetch from "./ProfileFetch";
import withAuthentication from "../withAuthentication";
import {compose} from "redux";
import withAccountId from "../withAccountId";


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

export default compose(
    withAccountId,
    withAuthentication,
    connect(mapStateToProps, mapDispatchToProps)
)
(ProfileFetch)