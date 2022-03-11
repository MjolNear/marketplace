import React from "react";
import {getCurrentWallet} from "../business-logic/near/wallet/wallet";

export interface SignedInProps {
    accountId: string,
    signedIn: boolean
}

function withAuthData<T>(Child: React.ComponentType<T & SignedInProps>):React.FC<T> {
    const wallet = getCurrentWallet()
    return (props) =>
        <Child {...props}
               accountId={wallet.getAccountId()}
               signedIn={wallet.isSignedIn()}
        />
}

export default withAuthData;