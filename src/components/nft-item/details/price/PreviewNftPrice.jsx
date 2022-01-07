import React from 'react';
import BlackNearIcon from "../../../ui/icons/near/BlackNearIcon";
import DarkBlueMjolText from "../../../ui/text/DarkBlueMjolText";

const PreviewNftPrice = ({price}) => {
    return (
        <div className="flex items-center text-lg lg:text-2xl">
            <DarkBlueMjolText text={price}/>
            <BlackNearIcon/>
        </div>
    );
};

export default PreviewNftPrice;