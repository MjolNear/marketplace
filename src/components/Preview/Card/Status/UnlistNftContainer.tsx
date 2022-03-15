import React from 'react';
import {TPriceContainerProps} from "./PriceContainer";
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import PriceContainer from "./PriceContainer";

interface TUnlistNftProps extends TPriceContainerProps {
    onClick: React.MouseEventHandler
}

const UnlistNftContainer: React.FC<TUnlistNftProps> = ({
    nearPrice,
    usdPrice,
    onClick
}) => {
    return (
        <PriceContainer usdPrice={usdPrice} nearPrice={nearPrice}>
            <DarkBlueGradientButton title="Unlist NFT" onClick={onClick}/>
        </PriceContainer>
    )
};

export default UnlistNftContainer;