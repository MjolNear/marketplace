import React, {useEffect} from 'react';
import PreviewNftPage from "../../../components/pages/preview/nft/PreviewNftPage";
import {useParams} from "react-router";
import NotFoundPage from "../../../components/pages/not-found/NotFoundPage";
import MjolGradientButton from "../../../components/ui/buttons/MjolGradientButton";
import PriceButtonContainer from "../../../components/nft-item/preview/nft-action/PriceButtonContainer";
import RoundLoader from "../../../components/ui/loaders/RoundLoader";
import {NFT_STATE} from "../../../state/preview/nft/reducer";


const PreviewNftFetch = ({previewNft, fetchNft, accountId}) => {
    const {contractId, tokenId} = useParams()

    useEffect(() =>
            fetchNft('turk.near', contractId, tokenId),
        []
    )

    if (previewNft.isError) {
        return <NotFoundPage/>
    }
    if (previewNft.isFetching || !previewNft.nft) {
        return <RoundLoader/>
    }

    const {state, ...props} = previewNft.resolveButtonState(accountId, previewNft.nft)

    let activeElement = <MjolGradientButton {...props}>{state}</MjolGradientButton>
    switch (state) {
        case NFT_STATE.BUY:
        case NFT_STATE.UNLIST:
            activeElement = <PriceButtonContainer price={previewNft.nft.price}
                                                  isListed={true}
                                                  button={activeElement}/>
            break
        case NFT_STATE.NOT_LISTED:
            activeElement = <PriceButtonContainer isListed={false}
                                                  text="NFT not listed on market"/>
            break
    }

    return <PreviewNftPage nft={previewNft.nft}
                           payouts={previewNft.payouts}
                           actionElement={activeElement}
    />
};

export default PreviewNftFetch;
