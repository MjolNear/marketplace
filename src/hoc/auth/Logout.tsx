import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {signOut} from "../../business-logic/near/enviroment/near";
import MjolLoader from "../../components/Common/Loaders/MjolLoader";

const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        signOut()
        navigate("/")
    })

    return <MjolLoader/>
};

export default Logout;