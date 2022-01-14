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
            <SinglePayout name="Fee:" value={getStringPercentage(price, treasury)}/>
            <SinglePayout name="Royalty:" value={getStringPercentage(price, royalties)}/>
        </div>
    );
};

export default PayoutsPreview;