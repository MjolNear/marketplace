import React, {useEffect} from 'react';
import PreviewNftPage from "../../../components/nft-item/preview/PreviewNftPage";
import {useParams} from "react-router";


const PreviewNftFetch = ({previewNft, fetchNft}) => {
    const {contractId, tokenId} = useParams()

    useEffect(() =>
            fetchNft('turk.near', contractId, tokenId),
        []
    )

    return <PreviewNftPage nft={previewNft.nft}/>
};

export default PreviewNftFetch;
