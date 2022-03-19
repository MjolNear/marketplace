import {useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {getURLInfo, swapToast} from "./Toast";
import {getCurrentWallet} from "../../business-logic/near/wallet/wallet";
import {JsonRpcProvider} from "near-api-js/lib/providers";
import {near} from "../../business-logic/near/wallet/web-wallet";

export const checkTransaction = (txHash: string): Promise<{
    transaction?: {
        actions: Record<string, any>[]
    }
}> => {
    return (near.connection.provider as JsonRpcProvider).sendJsonRpc(
        'EXPERIMENTAL_tx_status',
        [txHash, getCurrentWallet().getAccountId()]
    );
};

export enum TransactionStatus {
    Unlist,
    Buy,
    Sell,
    Failed,
}

export const useURLInfo = () => {
    const {txHash, hash, errorType} = getURLInfo();
    console.log(txHash, hash, errorType)
    const navigate = useNavigate()
    useEffect(() => {
        console.log("run toast effect")
        if (txHash) {
            checkTransaction(txHash).then(({transaction}) => {
                if (transaction?.actions[0]?.['FunctionCall']['method_name'] === "remove_from_market") {
                    return TransactionStatus.Unlist
                }
                return TransactionStatus.Failed
            })
                // .then(({transaction}: any) => {
                //     return (
                //         transaction?.actions[1]?.['FunctionCall']?.method_name ===
                //         'ft_transfer_call' ||
                //         transaction?.actions[0]?.['FunctionCall']?.method_name ===
                //         'ft_transfer_call' ||
                //         transaction?.actions[0]?.['FunctionCall']?.method_name === 'swap' ||
                //         transaction?.actions[0]?.['FunctionCall']?.method_name ===
                //         'near_withdraw'
                //     );
                // })
                .then((isSwap) => {
                    swapToast(txHash, isSwap);
                    // // window.location.replace(window.location.origin + hash)
                    navigate(`${hash}`, {
                        replace: true,
                        state: null,
                    })
                    // console.log(txHash)
                });
        }
    }, [txHash]);
}