import React from 'react';
import {Navigate} from "react-router-dom";


const withWalletConnection = (Component) => (props) => {
    if (!window.walletConnection.isSignedIn()) {
        return <Navigate to="/login"/>
    }
    return <Component {...props}/>
};

export default withWalletConnection;