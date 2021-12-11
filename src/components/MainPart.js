import React, {useState, useEffect} from 'react'
import {getNfts, getMintedNumber} from "../utils/mocks.js";
import * as nearAPI from "near-api-js";
import {login, logout} from "../utils/contract-utils";

export const {
    utils: {
        format: {
            formatNearAmount, parseNearAmount
        }
    }
} = nearAPI;


export default function MainPart() {

    const giveApprove = () => {
        console.log("GIVE approve");

        // Call other contracts
        window.walletConnection.account().functionCall(
            'x.paras.near',
            'nft_approve',
            {
                token_id: '56178:34',
                account_id: 'jpn.near',
                msg: 'price|ft_token'
            },
            "300000000000000",
            parseNearAmount('0.1')
        )
    };

    const buyNftWithPayout = () => {
        console.log("buyNftWithPayout");

        // Call own contract
        window.contract.buy_with_payouts(
            {
                nft_contract_id: 'x.paras.near',
                token_id: '56178:34'
            },
            "300000000000000",
            parseNearAmount('0.02')
        )
    };

    return (
        <>
            {/*<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">*/}
            {/*    <div className="rounded-md shadow">*/}
            {/*        <a*/}
            {/*            onClick={giveApprove}*/}
            {/*            className="w-full flex items-center justify-center text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">*/}
            {/*            Approve*/}
            {/*        </a>*/}
            {/*    </div>*/}

            {/*    <div className="rounded-md shadow">*/}
            {/*        <a*/}
            {/*            onClick={buyNftWithPayout}*/}
            {/*            className="w-full flex items-center justify-center text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">*/}
            {/*            Buy NFT(Royalties)*/}
            {/*        </a>*/}
            {/*    </div>*/}

            {/*</div>*/}
            <div>
                <p >{window.accountId}</p>
            </div>


        </>
    )
}

