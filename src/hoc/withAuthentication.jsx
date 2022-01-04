import React from 'react';
import WalletConnectionPage from "../components/pages/auth/WalletConnectionPage";


const withAuthentication = (Component) => (props) => {
    const wallet = window.walletConnection
    if (!wallet.isSignedIn()) {
        return <WalletConnectionPage/>
    }
    return <Component {...props} accountId={wallet.getAccountId()}/>
};

export default withAuthentication;