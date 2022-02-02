import React from 'react';
import NearBlackLogo from "../../../../../Icons/near/NearBlackLogo";

const SinglePayout = ({name, value}) => {
    return (
        <div className="mt-2 text-black font-bold flex items-center justify-between">
            <span>{name}</span>
            <span className="flex gap-2 items-center">
                <span>{value}</span>
                <NearBlackLogo/>
            </span>
        </div>
    );
};

export default SinglePayout;