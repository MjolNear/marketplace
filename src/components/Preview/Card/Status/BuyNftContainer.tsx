import React from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import {TPriceContainerProps} from "./PriceContainer";
import PriceContainer from "./PriceContainer";

interface TBuyNftProps extends TPriceContainerProps {
    onClick: React.MouseEventHandler
}

const BuyNftContainer: React.FC<TBuyNftProps> = ({nearPrice, usdPrice, onClick}) => {
    return (
        <PriceContainer nearPrice={nearPrice} usdPrice={usdPrice}>
            <DarkBlueGradientButton title="Buy NFT" onClick={onClick}/>
        </PriceContainer>
    )
};

export default BuyNftContainer;