import {buyNft, fetchNft, sellNft} from "../../../state/preview/nft/actions";
import PreviewNftFetch from "./PreviewNftFetch";
import {connect} from "react-redux";
import {compose} from "redux";
import withAccountId from "../../withAccountId";

const mapStateToProps = (state) => ({
    previewNft: state.previewNft
})

export default compose(
    withAccountId,
    connect(mapStateToProps, {fetchNft, buyNft, sellNft}),
)
(PreviewNftFetch)
