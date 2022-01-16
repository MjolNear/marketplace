import React from 'react';
import WalletConnectionPage from "../components/Pages/auth/WalletConnectionPage";
import {wallet} from "../business-logic/near/enviroment/near";


const withAuthentication = (Component) => (props) => {
    if (!wallet.isSignedIn()) {
        return <WalletConnectionPage/>
    }
    return <Component {...props} accountId={wallet.getAccountId()}/>
};

export default withAuthentication;