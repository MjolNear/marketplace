import React from 'react';
import NearBlackLogo from "../../Icons/near/NearBlackLogo";
import LightBlueGradientText from "../../Common/Text/LightBlueGradientText";
import {Optional} from "../../../business-logic/models/types";

interface PropTypes {
    price?: Optional<string>
}

const PriceBlock = React.memo<PropTypes>(({price}) => {
    const isListed = !!price
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