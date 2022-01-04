import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import ExploreNftsFetchHoc from "./ExploreNftsFetchHoc";
import {clearExploreNftState, fetchMarketNfts} from "../../../state/explore/nft/actions";
import withAccountId from "../../withAccountId";


const mapStateToProps = (state) => ({
    nfts: state.exploreNft.nfts,
    fetching: state.exploreNft.fetching
})

const mapDispatchToProps = {
    fetchMarketNfts,
    clearExploreNftState
}

export default compose(
    withAccountId,
    connect(mapStateToProps, mapDispatchToProps)
)(ExploreNftsFetchHoc)