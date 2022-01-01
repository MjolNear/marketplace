import React from 'react';
import {connect} from "react-redux";
import {changeProfileTab, pushNFT, setFetching, setHistory, setNfts} from "../../state/profile/actions";
import ProfileFetch from "./ProfileFetch";


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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFetch)