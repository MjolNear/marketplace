import React from 'react';
import withPriceContainer from "./withPriceContainer";
import DarkBlueGradientButton from "../../../../ui/buttons/DarkBlueGradientButton";

const BuyNftContainer = (props) => {
    return <DarkBlueGradientButton title="Buy NFT" {...props}/>;
};

export default withPriceContainer(BuyNftContainer);