import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import PriceContainer from "./PriceContainer";
import {ContractId, Optional, TokenId} from "../../../../business-logic/models/types";
import {unlistNFT} from "../../../../business-logic/near/api/market/transaction";

interface TUnlistNftProps {
    tokenPrice?: Optional<string>
    contractId: ContractId
    tokenId: TokenId
}

const UnlistNftContainer: React.FC<TUnlistNftProps> = ({
    tokenPrice,
    contractId,
    tokenId
}) => {

    const [isUnlisting, setIsUnlisting] = useState(false)

    const unlist = () => {
        setIsUnlisting(true)
        unlistNFT(contractId, tokenId).finally(() => setIsUnlisting(false))
    }

    return (
        <PriceContainer tokenPrice={tokenPrice}>
            <DarkBlueGradientButton title="Unlist NFT" onClick={unlist} isLoading={isUnlisting}/>
        </PriceContainer>
    )
};

export default UnlistNftContainer;