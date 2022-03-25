import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import PriceContainer from "./PriceContainer";
import {ContractId, Optional, TokenId} from "../../../../business-logic/models/types";
import {buyNftWithPayouts} from "../../../../business-logic/near/api/market/transaction";
import DarkBlueButton from "../../../Common/Buttons/DarkBlueButton";
import DarkCyanGradientButton from "../../../Common/Buttons/DarkCyanGradientButton";
import Tooltip from "../../../Layout/Tooltip";

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
            <div className="flex flex-col lg:flex-row gap-2">
                <DarkBlueGradientButton
                    title={tokenPrice === "0"
                        ? "Get for free"
                        : "Buy Now"
                    }
                    isLoading={isBuying}
                    onClick={buy}
                />
                <p className="w-full cursor-pointer"
                   data-for="placeOfferTooltip"
                   data-tip="Offers will be added soon!"
                >
                    <DarkBlueButton title="Place an Offer"
                                    disabled={true}
                    />
                </p>
                <Tooltip id="placeOfferTooltip" place="bottom"/>
            </div>
        </PriceContainer>
    )
};

export default BuyNftContainer;