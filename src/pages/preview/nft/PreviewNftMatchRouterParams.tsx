import React from 'react';
import {useParams} from "react-router";
import NotFoundPage from "../../not-found/NotFoundPage";
import PreviewNftPage from "./PreviewNftPage";

type TPreviewNftRouteParams = {
    contractId: string,
    tokenId: string,
}

const PreviewNftMatchRouterParams: React.FC = () => {
    const {contractId, tokenId} = useParams<TPreviewNftRouteParams>()

    if (!contractId || !tokenId) {
        return <NotFoundPage/>
    }

    return <PreviewNftPage contractId={contractId}
                           tokenId={tokenId}
    />
};

export default PreviewNftMatchRouterParams;