import React from "react";
import {wallet} from "../business-logic/near/enviroment/near";

export interface SignedInProps {
    accountId: string,
    signedIn: boolean
}

function withAuthData<T>(Child: React.ComponentType<T & SignedInProps>):React.FC<T> {
    return (props) =>
        <Child {...props}
               accountId={wallet.getAccountId()}
               signedIn={wallet.isSignedIn()}
        />
}

export default withAuthData;