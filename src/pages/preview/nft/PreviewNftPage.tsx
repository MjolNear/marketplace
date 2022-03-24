import React from 'react';
import {ContractId, TokenId} from "../../../business-logic/models/types";
import {useFetchTokenData} from "../../../hooks/token/useFetchTokenData";
import CreateLoader from "../../../components/Common/Loaders/CreateLoader";
import NotFound404Page from "../../NotFound404";
import TokenPreviewContainer from "../../../components/Preview/Token/TokenPreviewContainer";
import MobileTokenPreviewContainer from "../../../components/Preview/Token/MobileTokenPreviewContainer";
import DesktopTokenPreviewContainer from "../../../components/Preview/Token/DesktopTokenPreviewContainer";
import {useIsMobile} from "../../../hooks/useIsMobile";
import {useTokenTxToast} from "../../../hooks/useTokenTxToast";


interface TPreviewNftProps {
    contractId: ContractId
    tokenId: TokenId
}

const PreviewNftPage: React.FC<TPreviewNftProps> = ({
    contractId,
    tokenId,
}) => {
    const {fetching, token, contract, payouts} = useFetchTokenData(contractId, tokenId)
    const isMobile = useIsMobile()

    useTokenTxToast()

    if (fetching) return <CreateLoader/>
    if (!token) return <NotFound404Page/>


    return (
        <TokenPreviewContainer>
            {isMobile
                ? <MobileTokenPreviewContainer token={token} contract={contract} payouts={payouts}/>
                : <DesktopTokenPreviewContainer token={token} contract={contract} payouts={payouts}/>
            }
        </TokenPreviewContainer>
    );
}

export default PreviewNftPage;