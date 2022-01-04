import React from 'react';
import {BsFillCheckCircleFill} from 'react-icons/bs'

const NftVerifiedStatus = ({isVerified = true}) => {
    return isVerified
        ? <BsFillCheckCircleFill color="#18b3cc"/>
        : <></>
};

export default NftVerifiedStatus;