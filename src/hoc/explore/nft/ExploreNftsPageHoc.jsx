import React from 'react';
import {connect} from "react-redux";
import {changeProfileTab, clearProfileData, fetchMyNfts} from "../../../state/profile/actions"
import {compose} from "redux";
import ExploreNftsFetchHoc from "./ExploreNftsFetchHoc";


const mapStateToProps = (state) => ({
    profile: state.profile
})

const mapDispatchToProps = {
    changeProfileTab,
    fetchMyNfts,
    clearProfileData
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ExploreNftsFetchHoc)