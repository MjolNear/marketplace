import React from 'react';
import {getStringPercentage} from "../../../../../utils/string";
import SinglePayout from "./SinglePayout";

interface TPayoutsPriceProps {
    price: number
    payouts: Record<string, number>
}

const PayoutsPreview: React.FC<TPayoutsPriceProps> = ({
    price,
    payouts
}) => {

    const fee = payouts['fee'] || 0
    const royalties = Object
        .values(payouts)
        .reduce((a, b) => a + b, 0) - fee

    const receive = 100 - fee - royalties

    return (
        <div className="py-3">
            <SinglePayout name="Receive:" receiveAmount={getStringPercentage(price, receive)}/>
            <SinglePayout name="Fee:" receiveAmount={getStringPercentage(price, fee)}/>
            <SinglePayout name="Royalty:" receiveAmount={getStringPercentage(price, royalties)}/>
        </div>
    );
};

export default PayoutsPreview;