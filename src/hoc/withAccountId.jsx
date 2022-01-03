import React from "react";

const withAccountId = (Component) => (props) => {
    return <Component {...props} accountId={window.walletConnection.getAccountId()}/>
};

export default withAccountId;