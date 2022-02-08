import React from 'react';
import NearBlackLogo from "../../../Icons/near/NearBlackLogo";
import BN from "bn.js";
import LightBlueGradientText from "../../../Common/Text/LightBlueGradientText";
import DarkBlueMjolText from "../../../Common/Text/DarkBlueMjolText";

interface PriceProps {
    nearPrice: string
    usdPrice: string

}

const PreviewNftPrice = React.memo<PriceProps>(({nearPrice, usdPrice}) => {

    const priceInUSD = (Number(nearPrice) * Number(usdPrice)).toLocaleString(
        'en-US', {
            maximumFractionDigits: 6,
        })

    return (
        <div className="flex">
            <div className="flex items-center gap-2">
                <NearBlackLogo size={15}/>
                <DarkBlueMjolText text={nearPrice} classes="text-[25px] font-archivo font-extrabold"/>
            </div>
            <div
                className="text-gray-500 text-[13px] mt-[11px] pl-[10px] font-medium align-text-bottom whitespace-nowrap">
                (≈ {priceInUSD}$)
            </div>
        </div>
    );
});

export default PreviewNftPrice;