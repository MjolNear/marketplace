import React, {useEffect} from 'react';
import {getCurrentWallet} from "../business-logic/near/wallet/wallet";

const Logout = () => {
    useEffect(() => {
        getCurrentWallet().signOut()
    }, [])

    return null
};

export default Logout;