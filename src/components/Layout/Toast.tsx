import React from 'react';
import {toast} from 'react-toastify';
import {getConfig} from "../../near/enviroment/config";
import {TransactionOperation} from "../../hooks/useTxInfo";


export const mintedSuccessFullToast = (txHash: string, transaction: TransactionOperation) => {

}

export const successToast = (txHash: string, transaction: TransactionOperation) => {
    const explorerURL = getConfig().explorerUrl
    const txURL = `${explorerURL}/transactions/${txHash}`

    let text
    switch (transaction) {
        case TransactionOperation.Sell:
            text = "NFT placed on market successfully."
            break
        case TransactionOperation.Unlist:
            text = "NFT removed from market successfully."
            break
        case TransactionOperation.Buy:
            text = "NFT successfully purchased."
            break
        case TransactionOperation.MintToken:
            text = "Token minted successfully."
            break
        case TransactionOperation.MintCollection:
            text = "Collection created successfully."
            break
        case TransactionOperation.UpdatePrice:
            text = "Token price updated successfully."
            break
    }

    if (!text) {
        return
    }

    toast(
        <a href={txURL}
           target="_blank"
           className="bg-black"
           rel="noreferrer"
        >
            <div className="flex flex-col text-left font-archivo text-sm">
                {text}
                <p className="font-bold text-xs-2">Click to view TX</p>
            </div>
        </a>,
        {
            autoClose: 8000,
            closeOnClick: true,
            hideProgressBar: false,
            style: {
                background: 'white',
                boxShadow: '0px 0px 8px 8px rgba(120, 192, 233, 0.3)',
                borderRadius: '8px',
            },
            progressStyle: {
                background: '#67e8f9',
                borderRadius: '8px',
            },
        }
    )
};

export const failToast = () => {
    toast(
        <div className="font-archivo text-sm font-semibold text-gray-600">
            Transaction aborted or failed
        </div>,
        {
            autoClose: 8000,
            closeOnClick: true,
            hideProgressBar: false,
            style: {
                background: 'white',
                boxShadow: '0px 0px 7px 7px rgba(233, 120, 142, 0.3)',
                borderRadius: '8px',
            },
            progressStyle: {
                background: '#FF7575',
                borderRadius: '8px',
            },
        }
    );
};

export const copiedToast = (text: string = "Link copied") => {
    return toast(
        <div className="font-archivo text-xs-3 font-bold">{text}</div>,
        {
            style: {
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "10px"
            },
            progressStyle: {
                background: "#4391ff"
            },
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false
        })
}