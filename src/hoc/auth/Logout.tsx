import React, {useEffect} from 'react';
import {signOut} from "../../business-logic/near/enviroment/near";

const Logout = () => {
    useEffect(() => {
        signOut()
    }, [])

    return <></>
};

export default Logout;