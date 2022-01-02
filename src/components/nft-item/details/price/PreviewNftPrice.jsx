import React from 'react';
import NearLogo from "./NearLogo";

const PreviewNftPrice = ({price, isListed}) => {
    return (
        <div className="flex items-center">
            <p className="text-black font-extrabold text-lg lg:text-2xl">
                {isListed ? price : "NFT not listed on market"}
            </p>
            {isListed && <NearLogo/>}
        </div>
    );
};

export default PreviewNftPrice;