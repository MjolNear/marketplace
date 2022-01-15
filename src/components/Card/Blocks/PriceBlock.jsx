import React from 'react';
import NearBlackLogo from "../../Icons/near/NearBlackLogo";


const PriceBlock = React.memo(({price, isListed}) => {
    return (
        <div className="mt-2 mb-1 grid place-items-end">
            <div className="flex items-center gap-2">
                <p className="text-mjol-cyan-base font-black text-lg">
                    {isListed ? price : "Not listed"}
                </p>
                {isListed && <NearBlackLogo/>}
            </div>
        </div>
    );
});

export default PriceBlock;