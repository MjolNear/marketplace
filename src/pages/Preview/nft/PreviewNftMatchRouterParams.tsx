import React from 'react';
import {useParams} from "react-router";
import NotFound404Page from "../../NotFound404";
import PreviewNftPage from "./PreviewNftPage";

type TPreviewNftRouteParams = {
    contractId: string,
    tokenId: string,
}

const PreviewNftMatchRouterParams: React.FC = () => {
    const {contractId, tokenId} = useParams<TPreviewNftRouteParams>()

    if (!contractId || !tokenId) {
        return <NotFound404Page/>
    }

    return <PreviewNftPage contractId={contractId}
                           tokenId={tokenId}
    />
};

export default PreviewNftMatchRouterParams;