import {connect} from "react-redux";
import NftItem from "../../components/nft-item/NftItem";


const mapStateToProps = (state) => {
    return {
        nft: state.preview.nft
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}


const NftItemHOC = connect(mapStateToProps, mapDispatchToProps)(NftItem)

export default NftItemHOC;