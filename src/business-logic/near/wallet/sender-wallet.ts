import {Wallet} from "./wallet";
import {MARKET_CONTRACT_ID} from "../enviroment/contract-names";
import {FinalExecutionOutcome} from "near-api-js/lib/providers";
import {webWallet} from "./web-wallet";

const windowRef = window as any

export const SENDER_WALLET_SIGNED_IN_STATE_KEY =
    'SENDER_WALLET_SIGNEDIN_STATE_VALUE';

export const getSenderLoginRes = () => {
    return localStorage.getItem(SENDER_WALLET_SIGNED_IN_STATE_KEY);
};

export const saveSenderLoginRes = (accountId?: string) => {
    localStorage.setItem(
        SENDER_WALLET_SIGNED_IN_STATE_KEY,
        SENDER_WALLET_SIGNED_IN_STATE_KEY + ': ' + accountId ||
        windowRef.near.getAccountId()
    );
};

export const removeSenderLoginRes = () => {
    localStorage.removeItem(SENDER_WALLET_SIGNED_IN_STATE_KEY);
};

export function addQueryParams(
    baseUrl: string,
    queryParams: {
        [name: string]: string;
    }
) {
    const url = new URL(baseUrl);
    for (let key in queryParams) {
        const param = queryParams[key];
        if (param) url.searchParams.set(key, param);
    }
    return url.toString();
}

//
// export function addQueryParams(
//     baseUrl: string,
//     queryParams: {
//         [name: string]: string;
//     }
// ) {
//     const url = new URL(baseUrl);
//     for (let key in queryParams) {
//         const param = queryParams[key];
//         if (param) url.searchParams.set(key, param);
//     }
//     return url.toString();
// }
//
// function senderWalletFunc(window: Window) {
//     this.requestSignIn = async function (contractId: string) {
//         return window.near
//             .requestSignIn({
//                 contractId,
//             })
//             .then((res: any) => {
//                 if (res?.error && res?.error?.type) {
//                     window.location.href = addQueryParams(window.location.href, {
//                         signInErrorType: res.error.type,
//                     });
//                 }
//                 !res?.error && saveSenderLoginRes();
//                 return res;
//             });
//     };
//
//     this.signOut = function () {
//         removeSenderLoginRes();
//         return window.near.signOut();
//     };
//
//     this.requestSignTransactions = async function (
//         transactions: any,
//         callbackUrl?: string
//     ) {
//         if (!window.near.isSignedIn()) {
//             await this.requestSignIn(REF_FARM_CONTRACT_ID);
//         }
//
//         const senderTransaction = transactions.map((item: any) => {
//             return {
//                 ...item,
//                 actions: item.functionCalls.map((fc: any) => ({
//                     ...fc,
//                     deposit: scientificNotationToString(getAmount(fc.amount).toString()),
//                     gas: scientificNotationToString(getGas(fc.gas).toString()),
//                 })),
//             };
//         });
//
//         return window.near
//             .requestSignTransactions({
//                 transactions: senderTransaction,
//             })
//             .then((res: any) => {
//                 setCallbackUrl(res);
//             });
//     };
//
//     this.sendTransactionWithActions = async function (
//         receiverId: string,
//         functionCalls: RefFiFunctionCallOptions[]
//     ) {
//         if (!window.near.isSignedIn()) {
//             await this.requestSignIn(REF_FARM_CONTRACT_ID);
//         }
//
//         return window.near
//             .signAndSendTransaction({
//                 receiverId,
//                 actions: functionCalls.map((fc) => {
//                     return {
//                         ...fc,
//                         deposit: scientificNotationToString(
//                             getAmount(fc.amount).toString()
//                         ),
//                         gas: scientificNotationToString(getGas(fc.gas).toString()),
//                     };
//                 }),
//             })
//             .then((res: any) => {
//                 setCallbackUrl(res);
//             });
//     };
//
//     this.walletType = WALLET_TYPE.SENDER_WALLET;
// }
//
// senderWalletFunc.prototype = window.near;
//
// export const senderWallet = new (senderWalletFunc as any)();
//
// export const getSenderWallet = (window: Window) => {
//     senderWalletFunc.prototype = window.near;
//
//     return new (senderWalletFunc as any)(window);
// };

export const configureSenderWallet = (window: Window): Wallet | undefined => {
    const near = (window as any)?.near
    if (!near) {
        return undefined
    }
    return {
        isSignedIn: () => near.isSignedIn(),

        requestSignIn: () => {
            return near.requestSignIn({
                contractId: MARKET_CONTRACT_ID,
            })
                .then((res: any) => {
                    console.log(res)
                    console.log(res)
                    if (res?.error && res?.error?.type) {
                        window.location.href = addQueryParams(window.location.href, {
                            signInErrorType: res.error.type,
                        });
                    }
                    !res?.error && saveSenderLoginRes();
                    return res;
                });
        },

        signOut: () => {
            removeSenderLoginRes();
            return near.signOut();
        },

        getAccountId: () => near.getAccountId(),

        functionCall: ({
            contractId,
            methodName,
            args,
            gas,
            attachedDeposit
        }): Promise<FinalExecutionOutcome> => {
            const tx = {
                receiverId: contractId,
                actions: [
                    {
                        methodName,
                        args,
                        gas: gas?.toString(),
                        deposit: attachedDeposit?.toString()
                    },
                ],
            }
            return near.signAndSendTransaction(tx);
        },

        viewFunction: (contractId: string, methodsName: string, args: any) => {
            throw Error()
            // account_id: "mjol.near"
            // args_base64: "eyJ0b2tlbl9pZCI6InRva2VuLTQ2In0="
            // finality: "optimistic"
            // method_name: "nft_token"
            // request_type: "call_function"
            // return near.request('query', {
            //     account_id: contractId,
            //     finality: "optimistic",
            //     args_base64:
            //     method_name: methodsName,
            //     request_type: "call_function"
            // })
        }
    }
}