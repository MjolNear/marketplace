import React from 'react';
import NearBlackLogo from "../../Icons/near/NearBlackLogo";
import LightBlueGradientText from "../../Common/Text/LightBlueGradientText";

interface PropTypes {
    price: string | null
}

const PriceBlock = React.memo<PropTypes>(({price}) => {
    const isListed = price !== null
    return (
        <div className="mt-2 mb-1 grid place-items-end">
            <div className="flex items-center gap-2">
                <LightBlueGradientText text={isListed ? price : "Not listed"} size="lg" fontWeight="black"/>
                {isListed && <NearBlackLogo/>}
            </div>
        </div>
    );
});

export default PriceBlock;