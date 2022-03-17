import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import {getURLInfo, swapToast} from "./Toast";
import { getCurrentWallet } from "../../business-logic/near/wallet/wallet";
import {JsonRpcProvider} from "near-api-js/lib/providers";
import {near} from "../../business-logic/near/wallet/web-wallet";

export const checkTransaction = (txHash: string) => {
    return (near.connection.provider as JsonRpcProvider).sendJsonRpc(
        'EXPERIMENTAL_tx_status',
        [txHash, getCurrentWallet().getAccountId()]
    );
};

export const useURLInfo = () => {
    const { txHash, hash, errorType } = getURLInfo();
    const navigate = useNavigate()
    useEffect(() => {
        if (txHash) {
            checkTransaction(txHash)
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
                    !errorType && swapToast(txHash);
                    // window.location.replace(window.location.origin + hash)
                    navigate(`/${hash.substring(1)}`)
                    console.log(txHash)
                });
        }
    }, [txHash]);
}