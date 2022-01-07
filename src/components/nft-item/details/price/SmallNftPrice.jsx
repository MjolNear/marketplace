import React from 'react';

import ReactTooltip from "react-tooltip";
import NearSVG from "../../../ui/icons/near/NearSVG";

const SmallNftPrice = ({price, isListed}) => {
    return (
        <div className="flex items-center">
            <p className="text-mjol-cyan-base font-extrabold text-md sm:text-lg">
                {isListed ? price : "Not listed"}
            </p>
            {isListed &&
                <div>
                    <div data-tip='NEAR coin'><NearSVG/></div>
                    <ReactTooltip place='right' delayShow={100}/>
                </div>
            }
        </div>
    );
};

export default SmallNftPrice;