import React from 'react';
import DarkBlueGradientButton from "../../../../ui/buttons/DarkBlueGradientButton";
import withPriceContainer from "./withPriceContainer";

const ConnectWallet = ({onClick}) => {
    return <DarkBlueGradientButton title="Connect to NEAR" onClick={onClick}/>
};

export default withPriceContainer(ConnectWallet);