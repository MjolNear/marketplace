import React from 'react';
import WalletConnectionPage from "../components/pages/auth/WalletConnectionPage";


const withAuthentication = (Component) => (props) => {
    if (!window.walletConnection.isSignedIn()) {
        return <WalletConnectionPage/>
    }
    return <Component {...props}/>
};

export default withAuthentication;