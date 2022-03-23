import React, {useMemo} from 'react';
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

    const {fee, royalties, receive} = useMemo(() => {
        const fee = payouts["fee"] || 0
        const royalties = Object
            .values(payouts)
            .reduce((a, b) => a + b, 0) - fee

        const receive = 100 - fee - royalties
        return {fee, royalties, receive}
    }, [payouts])

    return (
        <section>
            <SinglePayout name="Receive:" receiveAmount={getStringPercentage(price, receive)}/>
            <SinglePayout name="Fee:" receiveAmount={getStringPercentage(price, fee)}/>
            <SinglePayout name="Royalty:" receiveAmount={getStringPercentage(price, royalties)}/>
        </section>
    );
};

export default PayoutsPreview;