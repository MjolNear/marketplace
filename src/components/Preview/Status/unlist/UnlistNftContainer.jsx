import React from 'react';
import withPriceContainer from "../withPriceContainer";
import DarkBlueGradientButton from "../../../Common/buttons/DarkBlueGradientButton";

const UnlistNftContainer = (props) => {
    return <DarkBlueGradientButton title="Unlist NFT" {...props}/>;
};

export default withPriceContainer(UnlistNftContainer);