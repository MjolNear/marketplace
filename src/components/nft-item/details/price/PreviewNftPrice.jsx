import React from 'react';
import WhiteNearIcon from "../../../ui/icons/near/WhiteNearIcon";

const PreviewNftPrice = ({price}) => {
    return (
        <div className="flex items-center">
            <p className="text-blue-100 font-extrabold text-lg lg:text-2xl">
                {price}
            </p>
            <WhiteNearIcon/>
        </div>
    );
};

export default PreviewNftPrice;