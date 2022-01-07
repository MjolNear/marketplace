import React from 'react';
import DarkBlueMjolText from "../../../ui/text/DarkBlueMjolText";
import NearSVG from "../../../ui/icons/near/NearSVG";

const PreviewNftPrice = ({price}) => {
    return (
        <div className="flex items-center text-xl">
            <DarkBlueMjolText text={price}/>
            <NearSVG/>
        </div>
    );
};

export default PreviewNftPrice;