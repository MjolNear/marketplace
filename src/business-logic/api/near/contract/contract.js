import {connect as connectWallet, Contract, keyStores, utils, WalletConnection} from 'near-api-js'
import Buffer from 'buffer'
import {NetworkEnv} from "../enviroment/network";
import {getConfig} from "../enviroment/config";

const nearConfig = getConfig(NetworkEnv.MAINNET);


export const GAS = "300000000000000";
export const SM_DEPOSIT = utils.format.parseNearAmount('0.1');

// Initialize contract & set global variables
export async function initContract() {
    // Initialize connection to the NEAR testnet
    window.Buffer = Buffer;
    const deps = {
        deps: {
            keyStore: new keyStores.BrowserLocalStorageKeyStore()
        }
    }
    const config = Object.assign(deps, nearConfig)
    const near = await connectWallet(config);

    // Initializing Wallet based Account. It can work with NEAR testnet wallet that
    // is hosted at https://wallet.testnet.near.org
    window.walletConnection = new WalletConnection(near, null);

    // Getting the Account ID. If still unauthorized, it's just empty string
    window.accountId = window.walletConnection.getAccountId();

    // Initializing our contract APIs by contract name and configuration
    window.contract = new Contract(window.walletConnection.account(), nearConfig.contractName, {
        // View methods are read only. They don't modify the state, but usually return some value.
        viewMethods: [],
        // Change methods can modify the state. But you don't receive the returned value when called.
        changeMethods: ['buy_with_payouts'],
    })
}

export function logout() {
    window.walletConnection.signOut()
    window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
    window.walletConnection.requestSignIn(nearConfig.contractName)
        .then(() => console.log("successfully logged in"))
        .catch(() => console.log("login failed"))
}