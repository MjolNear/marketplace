import React from 'react';
import WalletConnectionPage from "../pages/auth/WalletConnectionPage";
import {getCurrentWallet} from "../business-logic/near/wallet/wallet";


export default function withAuthRedirect<T>(
    Child: React.ComponentType<T>
): React.FC<T> {
    const isSignedIn = getCurrentWallet().isSignedIn()
    if (!isSignedIn) {
        return () => <WalletConnectionPage/>
    }
    return (props) => <Child {...props}/>
}