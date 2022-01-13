import React from 'react';

import NearSVG from "../../../ui/icons/near/NearSVG";

const SmallNftPrice = ({price, isListed}) => {
    return (
        <div className="flex items-center gap-2">
            <p className="text-mjol-cyan-base font-black text-xl">
                {isListed ? price: "Not listed"}
            </p>
            {isListed && <NearSVG/>}
        </div>
    );
};

export default SmallNftPrice;