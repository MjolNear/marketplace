import React from 'react';
import NearIcon from "../../../Icons/near/NearIcon";
import {Optional} from "../../../../business-logic/models/types";
import {useNearUsdPrice} from "../../../../hooks/useNearUsdPrice";

export interface TPriceContainerProps {
    tokenPrice?: Optional<string>
    children: React.ReactNode
}

const PriceContainer: React.FC<TPriceContainerProps> = ({
    tokenPrice,
    children
}) => {
    const usdPrice = useNearUsdPrice()

    const priceInUSD = tokenPrice && usdPrice
        ?
        `(≈ ${(Number(tokenPrice.replaceAll(',', '')) * usdPrice)
            .toLocaleString('en-US', {
                maximumFractionDigits: 6
            })}$)`
        :
        ""

    return (
        <div className="rounded-xl px-4 lg:px-6 py-4 bg-mjol-blue-card-property flex flex-col gap-4">
            <div className="font-bold font-archivo text-left text-sm text-gray-600 w-full">
                CURRENT PRICE
                <hr/>
            </div>
            <div className="flex">
                <div className="flex items-center gap-2">
                    <NearIcon size={18}/>
                    <div className="text-[25px] font-archivo font-extrabold">
                        {tokenPrice}
                    </div>
                </div>
                <div className="text-gray-500 text-[13px] mt-3 pl-2.5 font-medium align-text-bottom whitespace-nowrap">
                    {priceInUSD}
                </div>
            </div>
            {children}
        </div>
    );
}

export default PriceContainer;