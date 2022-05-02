import React, {useState} from 'react';
import PriceContainer from "./PriceContainer";
import {ContractId, Optional, TokenId} from "../../../../@types/Aliases";
import {buyNftWithPayouts} from "../../../../near/transaction";
import DarkBlueGradientButton from "../../../../@ui/Buttons/DarkBlueGradientButton";

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