import React from 'react';
import DarkBlueGradientButton from "../../../Common/buttons/DarkBlueGradientButton";
import withPriceContainer from "./withPriceContainer";

const BuyNftContainer = (props) => {
    return <DarkBlueGradientButton title="Buy NFT" {...props}/>;
};

export default withPriceContainer(BuyNftContainer);