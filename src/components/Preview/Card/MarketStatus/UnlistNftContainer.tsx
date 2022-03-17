import React, {memo} from 'react';
import {TPriceContainerProps} from "./PriceContainer";
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import PriceContainer from "./PriceContainer";
import {ContractId, TokenId} from "../../../../business-logic/models/types";
import {unlistNFT} from "../../../../business-logic/near/api/market/transaction";
import {useAppDispatch} from "../../../../hooks/redux";
import {outcomeSlice} from "../../../../state/store";

interface TUnlistNftProps extends TPriceContainerProps {
    contractId: ContractId
    tokenId: TokenId
}

const UnlistNftContainer: React.FC<TUnlistNftProps> = ({
    tokenPrice,
    contractId,
    tokenId
}) => {

    const unlist = () => {
        unlistNFT(contractId, tokenId).then()
    }

    return (
        <PriceContainer tokenPrice={tokenPrice}>
            <DarkBlueGradientButton title="Unlist NFT" onClick={unlist}/>
        </PriceContainer>
    )
};

export default memo(UnlistNftContainer);