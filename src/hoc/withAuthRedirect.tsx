import React from 'react';
import WalletConnectionPage from "../pages/auth/WalletConnectionPage";
import {wallet} from "../business-logic/near/enviroment/near";


function withAuthRedirect<T>(Child: React.ComponentType<T>) {
    if (!wallet.isSignedIn()) {
        return () => <WalletConnectionPage/>
    }
    return (props: T) => <Child {...props}/>
}

export default withAuthRedirect;