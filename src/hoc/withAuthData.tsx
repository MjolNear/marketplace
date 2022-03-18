import React from "react";
import {getCurrentWallet} from "../business-logic/near/wallet/wallet";

export interface TAuthProps {
    accountId: string,
    isSignedIn: boolean
}

export default function withAuthData<T>(
    Child: React.ComponentType<T & TAuthProps>
): React.FC<T> {
    const wallet = getCurrentWallet()
    return (props) =>
        <Child {...props}
               accountId={wallet.getAccountId()}
               isSignedIn={wallet.isSignedIn()}
        />
}
