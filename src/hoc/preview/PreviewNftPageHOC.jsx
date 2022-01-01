import {buyNFT, sellNFT, setFetching, setNFT} from "../../state/actions/preview";
import PreviewNftFetchHOC from "./PreviewNftFetchHOC";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    preview: state.preview
})

const mapDispatchToProps = ({
    buyNFT,
    setFetching,
    sellNFT,
    setNFT
})

const PreviewNftPageHOC = connect(mapStateToProps, mapDispatchToProps)(PreviewNftFetchHOC)

export default PreviewNftPageHOC;