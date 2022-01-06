import React from 'react';
import WalletConnectionPage from "../components/pages/auth/WalletConnectionPage";
import {wallet} from "../business-logic/near2/near/setup/near";


const withAuthentication = (Component) => (props) => {
    if (!wallet.isSignedIn()) {
        return <WalletConnectionPage/>
    }
    return <Component {...props} accountId={wallet.getAccountId()}/>
};

export default withAuthentication;