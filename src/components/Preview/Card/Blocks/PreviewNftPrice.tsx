import React from 'react';
import NearBlackLogo from "../../../Icons/near/NearBlackLogo";

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
                <NearBlackLogo size={18}/>
                <div className="text-[25px] font-archivo font-extrabold">
                    {nearPrice}
                </div>
            </div>
            <div
                className="text-gray-500 text-[13px] mt-[11px] pl-[10px] font-medium align-text-bottom whitespace-nowrap">
                (≈ {priceInUSD}$)
            </div>
        </div>
    );
});

export default PreviewNftPrice;