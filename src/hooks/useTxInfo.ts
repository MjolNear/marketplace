import {near} from "../near/wallet/web-wallet";
import {JsonRpcProvider} from "near-api-js/lib/providers";
import {getCurrentWallet} from "../near/wallet/wallet";
import {useLocation} from "react-router-dom";

export const checkTransaction = (txHash: string): Promise<{
    transaction?: {
        actions?: {
            FunctionCall?: {
                method_name?: string
            }
        }[]
    }
}> => {
    return (near.connection.provider as JsonRpcProvider).sendJsonRpc(
        'EXPERIMENTAL_tx_status',
        [txHash, getCurrentWallet().getAccountId()]
    );
};

export enum TransactionOperation {
    Unlist,
    Buy,
    Sell,
    MintToken,
    MintCollection,
    Unknown,
}

export enum TRANSACTION_WALLET_TYPE {
    NEAR_WALLET = "transactionHashes",
    SENDER_WALLET = "transactionHashesSender",
}

export const useTxInfo = () => {

    const {pathname} = useLocation()
    const search = window.location.search

    const errorType = new URLSearchParams(search).get("errorType");
    const errorCode = new URLSearchParams(search).get("errorCode")

    const signInErrorType = new URLSearchParams(search).get("signInErrorType");

    const txHashes = (
        new URLSearchParams(search).get(TRANSACTION_WALLET_TYPE.NEAR_WALLET) ||
        new URLSearchParams(search).get(TRANSACTION_WALLET_TYPE.SENDER_WALLET)
    )?.split(',');

    return {
        txHash: txHashes?.pop(),
        pathname,
        errorType,
        errorCode,
        signInErrorType,
        isError: errorType || errorCode || signInErrorType
    };
};