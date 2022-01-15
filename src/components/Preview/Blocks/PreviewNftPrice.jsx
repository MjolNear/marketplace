import React from 'react';
import DarkBlueMjolText from "../../Common/text/DarkBlueMjolText";
import NearBlackLogo from "../../Icons/near/NearBlackLogo";


const PreviewNftPrice = React.memo(({price}) => {
    return (
        <div className="flex items-center gap-2 text-xl">
            <DarkBlueMjolText text={price}/>
            <NearBlackLogo/>
        </div>
    );
});

export default PreviewNftPrice;