import React from "react";
import {getCurrentWallet} from "../business-logic/near/wallet/wallet";

export interface TSignedInProps {
    accountId: string,
    signedIn: boolean
}

function withAuthData<T>(Child: React.ComponentType<T & TSignedInProps>):React.FC<T> {
    const wallet = getCurrentWallet()
    return (props) =>
        <Child {...props}
               accountId={wallet.getAccountId()}
               signedIn={wallet.isSignedIn()}
        />
}

export default withAuthData;