import React, {memo, useState} from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import {TPriceContainerProps} from "./PriceContainer";
import PriceContainer from "./PriceContainer";
import {ContractId, TokenId} from "../../../../business-logic/models/types";
import {buyNftWithPayouts} from "../../../../business-logic/near/api/market/transaction";

interface TBuyNftProps extends TPriceContainerProps {
    contractId: ContractId,
    tokenId: TokenId,
    hasPayouts: boolean
}

const BuyNftContainer: React.FC<TBuyNftProps> = ({
    tokenPrice,
    contractId,
    tokenId,
    hasPayouts
}) => {

    // const [isBuying, setIsBuying] = useState(false)

    const buy = () => {
        // setIsBuying(true)
        buyNftWithPayouts(contractId, tokenId, tokenPrice || "0", hasPayouts)
            // .finally(() => setIsBuying(false))
    }

    return (
        <PriceContainer tokenPrice={tokenPrice}>
            <DarkBlueGradientButton
                title={tokenPrice === "0"
                    ? "Get for free"
                    : "Buy Now"
                }
                onClick={buy}
            />
        </PriceContainer>
    )
};

export default memo(BuyNftContainer);