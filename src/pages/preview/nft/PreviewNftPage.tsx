import React from 'react';
import {ContractId, TokenId} from "../../../business-logic/models/types";
import {useFetchTokenData} from "../../../hooks/useFetchTokenData";
import CreateLoader from "../../../components/Common/Loaders/CreateLoader";
import NotFoundPage from "../../not-found/NotFoundPage";
import TokenPreviewContainer from "../../../components/Preview/Card/TokenPreviewContainer";
import MobileTokenPreviewContainer from "../../../components/Preview/Card/MobileTokenPreviewContainer";
import DesktopTokenPreviewContainer from "../../../components/Preview/Card/DesktopTokenPreviewContainer";
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
    if (!token) return <NotFoundPage/>


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