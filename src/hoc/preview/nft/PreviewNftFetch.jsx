import React, {useEffect} from 'react';
import PreviewNftPage from "../../../components/pages/preview/nft/PreviewNftPage";
import {useParams} from "react-router";
import NotFoundPage from "../../../components/pages/not-found/NotFoundPage";
import MjolGradientButton from "../../../components/ui/buttons/MjolGradientButton";
import PriceButtonContainer from "../../../components/nft-item/preview/nft-action/PriceButtonContainer";


const PreviewNftFetch = ({previewNft, fetchNft}) => {
    const {contractId, tokenId} = useParams()

    useEffect(() =>
            fetchNft('turk.near', contractId, tokenId),
        []
    )

    if (previewNft.isError) {
        return <NotFoundPage/>
    }
    if (previewNft.isFetching || !previewNft.nft) {
        return <div className="text-center text-5xl">Fetching</div>
    }

    const {text, ...props} = previewNft.resolveButtonState(window.accountId, previewNft.nft)

    let activeButton = <MjolGradientButton {...props}>{text}</MjolGradientButton>
    if (text !== "Sell" || text !== "Unlist") {
        activeButton = <PriceButtonContainer price={previewNft.nft.price}
                                             isListed={previewNft.nft.isListed()}
                                             button={activeButton}/>
    }

    return <PreviewNftPage nft={previewNft.nft}
                           payouts={previewNft.payouts}
                           activeButton={activeButton}
    />
};

export default PreviewNftFetch;
