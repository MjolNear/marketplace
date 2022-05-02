import React from 'react';
import NearBlackLogo from "../../../../Icons/near/NearIcon";

interface TSinglePayoutProps {
    name: string
    receiveAmount: string
}

const SinglePayout: React.FC<TSinglePayoutProps> = ({
    name,
    receiveAmount
}) => {
    return (
        <div className="mt-2 text-black font-bold flex items-center justify-between">
            <span>{name}</span>
            <span className="flex gap-2 items-center">
                <span>{receiveAmount}</span>
                <NearBlackLogo/>
            </span>
        </div>
    );
};

export default SinglePayout;