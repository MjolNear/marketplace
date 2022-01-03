import {connect} from "react-redux";
import NftItem from "../../components/nft-item/NftItem";


const mapStateToProps = (state) => {
    const nft = state.preview.nft
    return {
        nft,
        previewLink: nft ? `nft/${nft.contractId}/${nft.tokenId}` : null,
        isListed: nft && nft.isListed()
    }
}


export default connect(mapStateToProps)(NftItem)