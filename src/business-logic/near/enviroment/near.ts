import {Contract, keyStores, Near, WalletConnection} from "near-api-js";
import {getConfig} from "./config";
import {NetworkEnv} from "./network";

export const network = NetworkEnv.MAINNET
export const config = getConfig(network)

const near = new Near({
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    ...config,
})

export const wallet = new WalletConnection(near, config.contractName)

// Initializing our setup APIs by setup name and configuration
export const contract = new Contract(wallet.account(), config.contractName, {
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ['get_nfts', 'get_user_nfts', 'get_nft_price'],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ['buy_with_payouts', 'remove_from_market'],
})

export const getAccountId = () => {
    return wallet.getAccountId()
}

export const signIn = () => {
    wallet.requestSignIn(config.contractName)
        .then()
        .catch()
}

export const signOut = (): void => {
    wallet.signOut();
    window.location.replace(window.location.origin)
}