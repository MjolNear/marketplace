import React from 'react';
import NearBlackLogo from "../../../Icons/near/NearBlackLogo";
import BN from "bn.js";
import LightBlueGradientText from "../../../Common/Text/LightBlueGradientText";

interface PriceProps {
    nearPrice: string
    usdPrice: string

}

const PreviewNftPrice = React.memo<PriceProps>(({nearPrice, usdPrice}) => {

    const priceInUSD = (Number(nearPrice) * Number(usdPrice)).toLocaleString(
        'en-US', {
            maximumFractionDigits: 6
        })

    return (
        <div className="inline-flex gap-3 items-center">
            <div className="flex items-center gap-2 font-archivo text-[20px] font-black">
                <NearBlackLogo/>
                <LightBlueGradientText text={nearPrice} size="xl" fontWeight="black"/>
            </div>
            <div className="text-gray-600 text-xs font-semibold">(≈ {priceInUSD}$)</div>
        </div>
    );
});

export default PreviewNftPrice;