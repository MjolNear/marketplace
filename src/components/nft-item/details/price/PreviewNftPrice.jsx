import React from 'react';
import BlackNearIcon from "../../../ui/icons/near/BlackNearIcon";

const PreviewNftPrice = ({price}) => {
    return (
        <div className="flex items-center text-lg lg:text-2xl">
            <p className="text-gray-900 font-extrabold">
                {price}
            </p>
            <BlackNearIcon/>
        </div>
    );
};

export default PreviewNftPrice;