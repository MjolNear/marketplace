import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import PriceContainer from "./PriceContainer";
import {ContractId, Optional, TokenId} from "../../../../business-logic/models/types";
import {buyNftWithPayouts} from "../../../../business-logic/near/api/market/transaction";
import DarkBlueButton from "../../../Common/Buttons/DarkBlueButton";
import DarkCyanGradientButton from "../../../Common/Buttons/DarkCyanGradientButton";

interface TBuyNftProps {
    tokenPrice?: Optional<string>
    contractId: ContractId,
    tokenId: TokenId,
    hasPayouts: boolean
}

const BuyNftContainer: React.FC<TBuyNftProps> = ({
    tokenPrice,
    contractId,
    tokenId,
    hasPayouts,
}) => {
    const [isBuying, setIsBuying] = useState(false)
    const buy = () => {
        setIsBuying(true)
        buyNftWithPayouts(contractId, tokenId, tokenPrice || "0", hasPayouts)
            .finally(() => setIsBuying(false))
    }

    return (
        <PriceContainer tokenPrice={tokenPrice}>
            <DarkBlueGradientButton
                title={tokenPrice === "0"
                    ? "Get for free"
                    : "Buy Now"
                }
                isLoading={isBuying}
                onClick={buy}
            />
        </PriceContainer>
    )
};

export default BuyNftContainer;