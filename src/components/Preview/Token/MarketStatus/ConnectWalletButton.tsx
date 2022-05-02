import React, {useState} from 'react';
import {getCurrentWallet} from "../../../../near/wallet/wallet";
import DarkBlueGradientButton from "../../../../@ui/Buttons/DarkBlueGradientButton";

const ConnectWalletButton = () => {

    const [isConnecting, setIsConnecting] = useState(false)

    return <DarkBlueGradientButton title="Connect to wallet"
                                   isLoading={isConnecting}
                                   onClick={() => {
                                       setIsConnecting(!isConnecting)
                                       getCurrentWallet().requestSignIn().then()
                                   }}
    />
};

export default ConnectWalletButton