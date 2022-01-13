import React from 'react';

import NearBlackLogo from "../../../ui/icons/near/NearBlackLogo";

const SmallNftPrice = React.memo(({price, isListed}) => {
    return (
        <div className="flex items-center gap-2">
            <p className="text-mjol-cyan-base font-black text-lg">
                {isListed ? price : "Not listed"}
            </p>
            {isListed && <NearBlackLogo/>}
        </div>
    );
});

export default SmallNftPrice;