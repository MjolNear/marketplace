import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router";


const withWalletConnection = (Component) => {

    const mapStateToProps = (state) => ({
        isWalletConnected: state.auth.isWalletConnected
    })

    const WalletConnectionRedirect = ({isWalletConnected, ...props}) => {
        if (!isWalletConnected) {
            return <Redirect to="/connect-wallet"/>
        }

        return <Component {...props}/>
    }

    return connect(mapStateToProps)(WalletConnectionRedirect)
};

export default withWalletConnection;