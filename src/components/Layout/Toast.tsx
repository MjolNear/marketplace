import React from 'react';
import {toast} from 'react-toastify';
import {getConfig} from "../../business-logic/near/enviroment/config";
import {XIcon} from "@heroicons/react/solid";
import {TransactionStatus} from "./getURLInfo";

export enum TRANSACTION_WALLET_TYPE {
    NEAR_WALLET = 'transactionHashes',
    SENDER_WALLET = 'transactionHashesSender',
}

export enum TRANSACTION_STATE {
    SUCCESS = 'success',
    FAIL = 'fail',
}

export const getURLInfo = () => {
    const search = window.location.search;

    console.log("search: " + search)

    const hash = window.location.hash;


    const errorType = new URLSearchParams(search).get('errorType');
    const errorCode = new URLSearchParams(search).get("errorCode")
    const errorMessage = new URLSearchParams(search).get("errorMessage")

    const signInErrorType = new URLSearchParams(search).get('signInErrorType');

    console.log(`error type: ${errorType} | error code: ${errorCode} | signin${signInErrorType} | message: ${errorMessage}`)

    const txHashes = (
        new URLSearchParams(search).get(TRANSACTION_WALLET_TYPE.NEAR_WALLET) ||
        new URLSearchParams(search).get(TRANSACTION_WALLET_TYPE.SENDER_WALLET)
    )?.split(',');

    return {
        txHash: txHashes?.pop() || '',
        hash,
        errorType,
        signInErrorType,
    };
};

export const swapToast = (txHash: string, transaction: TransactionStatus) => {
    toast.success(transaction, {
        autoClose: 10000,
    })
};

export const failToast = (txHash: string, errorType?: string) => {
    toast(
        <a
            className="text-error w-full h-full pl-1.5 py-1"
            href={`${getConfig().explorerUrl}/transactions/${txHash}`}
            target="_blank"
            style={{
                lineHeight: '20px',
            }}
        >
            <div>Transaction aborted or failed</div>
            {/*{'. '}*/}
            {/*<br/>*/}
            {/*<FormattedMessage id="Type" defaultMessage="Type"/>: {` `}*/}
            {/*{errorType}*/}
            {/*{'. '}*/}
            {/*<FormattedMessage id="click_to_view" defaultMessage="Click to view"/>*/}
        </a>,
        {
            autoClose: false,
            closeOnClick: true,
            hideProgressBar: false,
            closeButton: <XIcon/>,
            progressStyle: {
                background: '#FF7575',
                borderRadius: '8px',
            },
            style: {
                background: '#1D2932',
                boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.15)',
                borderRadius: '8px',
            },
        }
    );
};