import React, {useEffect} from 'react';

import {useNavigate} from "react-router-dom";
import {checkTransaction, TransactionOperation, useTxInfo} from "./useTxInfo";
import {failToast, successToast} from "../components/Layout/Toast";

export const useTokenTxToast = () => {
    const {txHash, pathname, isError} = useTxInfo();

    const navigate = useNavigate()

    useEffect(() => {
        if (txHash) {
            checkTransaction(txHash)
                .then(response => {
                    const actions = response.transaction?.actions || []

                    for (const action of actions) {
                        const methodName = action.FunctionCall?.method_name
                        if (methodName === "remove_from_market") {
                            return TransactionOperation.Unlist
                        }
                        if (methodName === "nft_approve") {
                            return TransactionOperation.Sell
                        }
                        if (methodName === "buy") {
                            return TransactionOperation.Buy
                        }
                    }
                    return TransactionOperation.Unknown
                })
                .then(result => {
                    if (!isError && result !== TransactionOperation.Unknown) {
                        // navigate(pathname)
                        successToast(txHash, result)
                    }
                })
        }
        if (isError) {
            failToast()
            // navigate(pathname)
        }
    }, [txHash, isError])

    return null
};