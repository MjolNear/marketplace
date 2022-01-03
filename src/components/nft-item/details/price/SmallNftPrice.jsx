import React from 'react';

import BlackNearIcon from "../../../ui/icons/near/BlackNearIcon";
import ReactTooltip from "react-tooltip";

const SmallNftPrice = ({price, isListed}) => {
    return (
        <div className="flex items-center">
            <p className="text-price-cyan font-extrabold text-md sm:text-lg">
                {isListed ? price : "Not listed"}
            </p>
            {isListed &&
                <div>
                    <div data-tip='NEAR'><BlackNearIcon/></div>
                    <ReactTooltip className='text-md text-pink-600' place='bottom' delayShow={100}/>
                </div>
            }
        </div>
    );
};

export default SmallNftPrice;