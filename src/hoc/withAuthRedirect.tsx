import React from 'react';
import WalletConnectionPage from "../pages/auth/WalletConnectionPage";
import {getCurrentWallet} from "../business-logic/near/wallet/wallet";


function withAuthRedirect<T>(Child: React.ComponentType<T>) {
    if (!getCurrentWallet().isSignedIn) {
        return () => <WalletConnectionPage/>
    }
    return (props: T) => <Child {...props}/>
}

export default withAuthRedirect;