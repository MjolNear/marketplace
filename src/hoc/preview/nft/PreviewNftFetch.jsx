import React, {useEffect} from 'react';
import PreviewNftPage from "../../../components/pages/preview/nft/PreviewNftPage";
import {useParams} from "react-router";
import NotFoundPage from "../../../components/pages/not-found/NotFoundPage";
import MjolGreenBlueButton from "../../../components/ui/buttons/MjolGreenBlueButton";
import PriceContainer from "../../../components/nft-item/preview/action/PriceContainer";
import RoundLoader from "../../../components/ui/loaders/RoundLoader";
import {NFT_STATE} from "../../../state/preview/nft/reducer";

const PreviewNftFetch = ({previewNft, fetchNft, accountId}) => {
    const {contractId, tokenId} = useParams()
    const nft = previewNft.nft

    useEffect(() => {
        fetchNft(accountId, contractId, tokenId)
    }, [])

    if (previewNft.isError) {
        return <NotFoundPage/>
    }
    if (previewNft.isFetching || !previewNft.nft) {
        return <RoundLoader/>
    }

    const {state, ...props} = previewNft.resolveButtonState(accountId, nft)

    let activeElement = <MjolGreenBlueButton {...props}>{state}</MjolGreenBlueButton>
    switch (state) {
        case NFT_STATE.BUY:
        case NFT_STATE.UNLIST:
            activeElement = <PriceContainer price={nft.price}
                                            isListed={true}
                                            element={activeElement}/>
            break
        case NFT_STATE.NOT_LISTED:
            activeElement = <PriceContainer isListed={false}
                                            text="NFT not listed on market"/>
            break
    }

    return <>
        <PreviewNftPage nft={previewNft.nft}
                        payouts={previewNft.payouts}
                        actionElement={activeElement}
        />
    </>
};

export default PreviewNftFetch;
