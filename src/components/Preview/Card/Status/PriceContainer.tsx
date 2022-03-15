import React from 'react';
import NearBlackLogo from "../../../Icons/near/NearBlackLogo";
import {BN} from "bn.js";
import {Optional} from "../../../../business-logic/models/types";
import JSBI from "jsbi";
import {prettyBalance} from "../../../../utils/string";

export interface TPriceContainerProps {
    nearPrice?: Optional<string>
    usdPrice?: Optional<number>
}

const PriceContainer: React.FC<TPriceContainerProps> = ({
    nearPrice,
    usdPrice,
    children
}) => {
    const priceInUSD = nearPrice && usdPrice
        ?
        `≈ ${(Number(nearPrice) * usdPrice).toLocaleString('en-US', {
            maximumFractionDigits: 6
        })}$`
        :
        "fetching USD price..."

    console.log('render')

    return (
        <div className="rounded-xl px-[24px] py-[18px] bg-mjol-blue-card-property flex flex-col gap-4">
            <div className="font-bold font-archivo text-left text-sm text-gray-600 w-full">
                CURRENT PRICE
                <hr/>
            </div>
            <div className="flex">
                <div className="flex items-center gap-2">
                    <NearBlackLogo size={18}/>
                    <div className="text-[25px] font-archivo font-extrabold">
                        {nearPrice}
                    </div>
                </div>
                <div
                    className="text-gray-500 text-[13px] mt-[11px] pl-[10px] font-medium align-text-bottom whitespace-nowrap">
                    ({priceInUSD})
                </div>
            </div>
            {children}
        </div>
    );
}

export default PriceContainer;