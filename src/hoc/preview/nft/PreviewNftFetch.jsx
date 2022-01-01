import React, {useEffect} from 'react';
import PreviewNftPage from "../../../components/pages/preview/nft/PreviewNftPage";
import {useParams} from "react-router";
import NotFoundPage from "../../../components/pages/not-found/NotFoundPage";


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
    return <PreviewNftPage nft={previewNft.nft}/>
};

export default PreviewNftFetch;
