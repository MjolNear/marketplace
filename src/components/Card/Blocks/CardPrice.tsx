import React from 'react';
import NearIcon from "../../Icons/near/NearIcon";
import LightBlueGradientText from "../../Common/Text/LightBlueGradientText";
import {Optional} from "../../../business-logic/models/types";

interface TCardPriceProps {
    price?: Optional<string>
}

const CardPrice: React.FC<TCardPriceProps> = ({price}) => {
    const isListed = !!price
    return (
        <div className="mt-2 mb-1 grid place-items-end">
            <div className="flex items-center gap-2">
                <LightBlueGradientText text={isListed ? price : "Not listed"} size="lg" fontWeight="black"/>
                {isListed && <NearIcon/>}
            </div>
        </div>
    );
};

export default CardPrice;