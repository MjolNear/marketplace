import {buyNft, fetchNft, sellNft} from "../../../state/preview/nft/actions";
import PreviewNftFetch from "./PreviewNftFetch";
import {connect} from "react-redux";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    previewNft: state.previewNft
})

export default compose(
    connect(mapStateToProps, {fetchNft, buyNft, sellNft}),
)(PreviewNftFetch)
