import React from 'react';
import DarkBlueGradientButton from "../../../../Common/Buttons/DarkBlueGradientButton";
import {getCurrentWallet} from "../../../../../business-logic/near/wallet/wallet";

const ConnectWalletButton = () => {
    return <DarkBlueGradientButton title="Connect to NEAR" onClick={() => getCurrentWallet().requestSignIn()}/>
};

export default ConnectWalletButton