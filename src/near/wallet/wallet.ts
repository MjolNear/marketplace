import {FunctionCallOptions} from "../enviroment/rpc";
import {FinalExecutionOutcome} from "near-api-js/lib/providers";
import {webWallet} from "./web-wallet";
import {configureSenderWallet} from "./sender-wallet";
import {createContext} from "react";
import {ConnectedWalletAccount} from "near-api-js";

export enum WalletType {
    NearWebWallet,
    SenderWallet
}

export interface Wallet {
    accountId?: string
    isSignedIn: () => boolean,
    requestSignIn: () => Promise<any>,
    signOut: () => void,
    account: () => ConnectedWalletAccount,
    getAccountId: () => string,
    viewFunction: <T>(contractId: string, methodName: string, args?: any) => Promise<T>
    functionCall: (props: FunctionCallOptions) => Promise<FinalExecutionOutcome>
}

export interface WalletInstance {
    wallet: Wallet,
    walletType: WalletType
}

export const getCurrentWallet = (): Wallet => {
    // const senderWallet = configureSenderWallet(window)
    // console.log(senderWallet?.getAccountId())
    return webWallet
}

export const WalletContext = createContext<any>(null)