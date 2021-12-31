import React, {useEffect} from 'react';
import PreviewNftPage from "../../components/nft-item/preview/PreviewNftPage";
import {useParams} from "react-router";
import {getNFTsByContractAndTokenId} from "../../business-logic/near/get-nfts";
import {useFetching} from "../../hooks/useFetching";

const PreviewNftFetchHOC = ({preview, setNFT, setFetching}) => {
    const {contractId, tokenId} = useParams()

    useEffect(() =>
        useFetching(setFetching, (onFetch) =>
            getNFTsByContractAndTokenId('turk.near', contractId, tokenId)
                .then(setNFT)
                .finally(onFetch)
        ), [])

    return <PreviewNftPage nft={preview.nft}/>
};

export default PreviewNftFetchHOC;
