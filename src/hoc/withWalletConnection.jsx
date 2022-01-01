import React from 'react';
import WalletConnectionPage from "../components/pages/auth/WalletConnectionPage";


const withWalletConnection = (Component) => (props) => {
    if (!window.walletConnection.isSignedIn()) {
        return <WalletConnectionPage/>
    }
    return <Component {...props}/>
};

export default withWalletConnection;