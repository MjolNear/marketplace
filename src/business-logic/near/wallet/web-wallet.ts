import {keyStores, Near, WalletConnection} from "near-api-js";
import {Wallet} from "./wallet";
import {getConfig} from "../enviroment/config";
import {NetworkEnv} from "../enviroment/network";

const config = getConfig(NetworkEnv.MAINNET)

export const near = new Near({
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    ...config,
})

const wallet = new WalletConnection(near, config.contractName)

export const webWallet: Wallet = {

    isSignedIn: () => wallet.isSignedIn(),

    requestSignIn: () => wallet.requestSignIn(config.contractName),

    signOut: () => {
        wallet.signOut();
        window.location.replace(window.location.origin)
    },

    getAccountId: () => wallet.getAccountId(),

    functionCall: options => wallet.account().functionCall(options),

    viewFunction: <T>(contractId: string, methodName: string, args: any) => wallet
        .account()
        .viewFunction(contractId, methodName, args)
}