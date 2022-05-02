import {useEffect} from 'react';

import {useNavigate} from "react-router-dom";
import {checkTransaction, TransactionOperation, useTxInfo} from "./useTxInfo";
import {failToast, successToast} from "../components/Layout/Toast";

export const useTxToast = () => {
    const {txHash, pathname, isError} = useTxInfo();

    const navigate = useNavigate()

    useEffect(() => {
        if (txHash) {
            checkTransaction(txHash)
                .then(response => {
                    const actions = response.transaction?.actions || []
                    for (const action of actions) {
                        const methodName = action.FunctionCall?.method_name
                        const args = action.FunctionCall?.args
                        if (methodName === "remove_from_market") {
                            return TransactionOperation.Unlist
                        }
                        if (methodName === "nft_approve") {
                            return TransactionOperation.Sell
                        }
                        if (methodName === "update_token_price") {
                            return TransactionOperation.UpdatePrice
                        }
                        if (methodName === "buy") {
                            return TransactionOperation.Buy
                        }
                        if (methodName === "nft_mint") {
                            return TransactionOperation.MintToken
                        }
                        if (methodName === "create_collection") {
                            return TransactionOperation.MintCollection
                        }
                    }
                    return TransactionOperation.Unknown
                })
                .then(result => {
                    if (!isError && result !== TransactionOperation.Unknown) {
                        successToast(txHash, result)
                        navigate(pathname)
                    } else {
                        navigate(pathname)
                    }
                }).catch(() => navigate(pathname))
        }
        if (isError) {
            failToast()
            navigate(pathname)
        }
    }, [txHash, isError, navigate, pathname])

    return null
};