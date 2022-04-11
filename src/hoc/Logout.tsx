import React, {useEffect} from 'react';
import {getCurrentWallet} from "../near/wallet/wallet";

const Logout = () => {
    useEffect(() => {
        getCurrentWallet().signOut()
    }, [])

    return null
};

export default Logout;