import {buyNFT, sellNFT, setFetching, setNFT} from "../../../state/preview/nft/actions";
import PreviewNftFetch from "./PreviewNftFetch";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
    previewNft: state.previewNft
})


export default connect(mapStateToProps, {
    buyNFT,
    setFetching,
    sellNFT,
    setNFT
})(PreviewNftFetch)