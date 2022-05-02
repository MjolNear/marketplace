import React from 'react';
import LightBlueGradientText from "../../Common/Text/LightBlueGradientText";
import {Optional} from "../../../@types/Aliases";
import {CardSize, useCardSize} from "../../../context/CardSizeContext";
import classNames from "../../../utils/css-utils";
import NearIcon from "../../Icons/near/NearIcon";

interface TCardPriceProps {
    price?: Optional<string>
}

const CardPrice: React.FC<TCardPriceProps> = ({price}) => {
    const isListed = !!price
    const size = useCardSize()
    return (
        <div className={classNames("grid place-items-end", size === CardSize.Big ? "mt-2 mb-1" : "my-[2px]")}>
            <div className="flex items-center gap-2">
                <LightBlueGradientText text={isListed ? price : "Not listed"}
                                       size={size === CardSize.Big ? "lg" : "sm"}
                                       fontWeight="black"
                />
                {isListed && <NearIcon size={size === CardSize.Big ? 15 : 11}/>}
            </div>
        </div>
    );
};

export default CardPrice;