import React from 'react';
import {GoVerified, GoUnverified} from 'react-icons/go'

const NftVerifiedStatus = ({isVerified = true}) => {
    return isVerified
        ? <GoVerified size={14} color="#18b3cc"/>
        : <GoUnverified size={14} color=""/>
};

export default NftVerifiedStatus;