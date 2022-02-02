import React from 'react';
import DarkBlueGradientButton from "../../../../Common/buttons/DarkBlueGradientButton";
import {signIn} from "../../../../../business-logic/near/enviroment/near";

const ConnectWalletButton = () => {
    return <DarkBlueGradientButton title="Connect to NEAR" onClick={signIn}/>
};

export default ConnectWalletButton