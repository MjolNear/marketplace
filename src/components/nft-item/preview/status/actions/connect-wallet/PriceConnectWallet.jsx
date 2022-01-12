import withPriceContainer from "../withPriceContainer";

import React from 'react';
import ConnectWalletButton from "./ConnectWalletButton";

const PriceConnectWallet = ({onClick}) => {
    return <ConnectWalletButton onClick={onClick}/>
};

export default withPriceContainer(PriceConnectWallet);