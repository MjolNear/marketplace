import React, {useState} from 'react';
import DarkBlueGradientButton from "../../../Common/Buttons/DarkBlueGradientButton";
import {getCurrentWallet} from "../../../../business-logic/near/wallet/wallet";

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