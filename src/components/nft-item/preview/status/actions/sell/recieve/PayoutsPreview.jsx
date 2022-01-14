import React from 'react';
import SinglePayout from "./SinglePayout";
import {getStringPercentage} from "../../../../../../../utils/string";

const PayoutsPreview = ({price, payouts}) => {

    const {treasury, ...rest} = payouts
    const royalties = Object.values(rest).reduce((a, b) => a + b, 0)
    const receive = 100 - treasury - royalties

    return (
        <div>
            <SinglePayout name="Receive:" value={getStringPercentage(price, receive)}/>
            <SinglePayout name="Royalty:" value={getStringPercentage(price, royalties)}/>
            <SinglePayout name="Fee:" value={getStringPercentage(price, treasury)}/>
        </div>
    );
};

export default PayoutsPreview;