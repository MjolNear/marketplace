import React from 'react';
import DarkBlueMjolText from "../../../ui/text/DarkBlueMjolText";
import NearBlackLogo from "../../../ui/icons/near/NearBlackLogo";

const PreviewNftPrice = React.memo(({price}) => {
    return (
        <div className="flex items-center text-xl">
            <DarkBlueMjolText text={price}/>
            <NearBlackLogo/>
        </div>
    );
});

export default PreviewNftPrice;