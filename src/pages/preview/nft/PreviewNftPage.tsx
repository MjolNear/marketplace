import React from 'react';
import {ContractId, TokenId} from "../../../business-logic/models/types";
import {useTokenPayouts} from "../../../hooks/token/useTokenPayouts";
import {useTokenParsedContract} from "../../../hooks/token/useTokenParsedContract";
import {useFetchTokenData} from "../../../hooks/useFetchTokenData";
import CreateLoader from "../../../components/Common/Loaders/CreateLoader";
import NotFoundPage from "../../not-found/NotFoundPage";
import TokenPreviewContainer from "../../../components/Preview/Card/TokenPreviewContainer";
import MobileTokenPreviewContainer from "../../../components/Preview/Card/MobileTokenPreviewContainer";
import DesktopTokenPreviewContainer from "../../../components/Preview/Card/DesktopTokenPreviewContainer";
import {useURLInfo} from "../../../components/Layout/getURLInfo";


interface TPreviewNftProps {
    contractId: ContractId
    tokenId: TokenId
}

const PreviewNftPage: React.FC<TPreviewNftProps> = ({
    contractId,
    tokenId,
}) => {
    const {token, contract, payouts, fetching} = useFetchTokenData(contractId, tokenId)

    if (fetching) return <CreateLoader/>
    if (!token) return <NotFoundPage/>

    return (
        <TokenPreviewContainer>
            <MobileTokenPreviewContainer token={token} contract={contract} payouts={payouts}/>
            <DesktopTokenPreviewContainer token={token} contract={contract} payouts={payouts}/>
        </TokenPreviewContainer>
    );
}

export default PreviewNftPage;