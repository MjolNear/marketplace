import React from 'react';

import NearSVG from "../../../ui/icons/near/NearSVG";

const SmallNftPrice = ({price, isListed}) => {
    return (
        <div className="flex items-center">
            <p className="text-mjol-cyan-base font-extrabold text-xl">
                {isListed ? price : "Not listed"}
            </p>
            {isListed && <NearSVG/>}
        </div>
    );
};

export default SmallNftPrice;