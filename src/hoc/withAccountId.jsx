import React from "react";
import {wallet} from "../business-logic/near2/near/setup/near";

const withAccountId = (Component) => (props) => {
    return <Component {...props} accountId={wallet.getAccountId()}/>
};

export default withAccountId;