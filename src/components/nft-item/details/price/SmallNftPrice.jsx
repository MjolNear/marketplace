import React from 'react';

import BlackNearIcon from "../../../ui/icons/near/BlackNearIcon";

const SmallNftPrice = ({price, isListed}) => {
    return (
        <div className="flex items-center">
            <p className="text-cyan-600 font-extrabold text-md lg:text-lg xl:text-2xl 2xl:text-3xl">
                {isListed ? price : "Not listed"}
            </p>
            {isListed && <BlackNearIcon/>}
        </div>
    );
};

export default SmallNftPrice;