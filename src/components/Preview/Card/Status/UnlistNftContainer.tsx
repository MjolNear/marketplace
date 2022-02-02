import React from 'react';
import withPriceContainer from "./withPriceContainer";
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";

const UnlistNftContainer = (props: any) => {
    return <DarkBlueGradientButton title="Unlist NFT" {...props}/>;
};

export default withPriceContainer(UnlistNftContainer);