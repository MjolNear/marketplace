import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import PriceContainer from "./PriceContainer";
import {ContractId, Optional, TokenId} from "../../../../business-logic/models/types";
import {unlistNFT} from "../../../../business-logic/near/api/market/transaction";
import DarkBlueButton from "../../../Common/Buttons/DarkBlueButton";

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

    const [isSigningTx, setIsSigningTx] = useState(false)

    const unlist = () => {
        setIsSigningTx(true)
        unlistNFT(contractId, tokenId).finally(() => setIsSigningTx(false))
    }

    return (
        <PriceContainer tokenPrice={tokenPrice}>
            <div className="flex flex-col md:flex-row gap-2 lg:max-w-[65%]">
                <DarkBlueGradientButton title="Unlist NFT" onClick={unlist} isLoading={isSigningTx}/>
                {/*<DarkBlueButton title="Update price" disabled={true}/>*/}
            </div>
        </PriceContainer>
    )
};

export default UnlistNftContainer;