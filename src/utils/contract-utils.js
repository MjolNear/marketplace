import {connect, Contract, keyStores, utils, WalletConnection} from 'near-api-js'
import getConfig from '../config'
import Buffer from 'buffer'

const nearConfig = getConfig('mainnet');


const GAS = "300000000000000";

// Initialize contract & set global variables
export async function initContract() {
    // Initialize connection to the NEAR testnet

    window.Buffer = Buffer;
    const near = await connect(Object.assign({deps: {keyStore: new keyStores.BrowserLocalStorageKeyStore()}}, nearConfig));

    // Initializing Wallet based Account. It can work with NEAR testnet wallet that
    // is hosted at https://wallet.testnet.near.org
    window.walletConnection = new WalletConnection(near);

    // Getting the Account ID. If still unauthorized, it's just empty string
    window.accountId = window.walletConnection.getAccountId();

    // Initializing our contract APIs by contract name and configuration
    window.contract = await new Contract(window.walletConnection.account(), nearConfig.contractName, {
        // View methods are read only. They don't modify the state, but usually return some value.
        viewMethods: [],
        // Change methods can modify the state. But you don't receive the returned value when called.
        changeMethods: ['buy_with_payouts'],
    })
}

export function logout() {
    window.walletConnection.signOut();
    // reload page
    window.location.replace(window.location.origin + window.location.pathname)
}

export function login() {
    // Allow the current app to make calls to the specified contract on the
    // user's behalf.
    // This works by creating a new access key for the user's account and storing
    // the private key in localStorage.
    console.log("SIGN IN");
    window.walletConnection.requestSignIn(nearConfig.contractName)
}

export function mintToCommonCollection(token_metadata, payout) {
    const common_contract_id = 'mjol.near';
    const token_id = 'token-' + new Date().getTime();

    const data = {
        token_id: token_id,
        token_owner_id: window.accountId,
        token_metadata: token_metadata,
    };
    if (payout !== null) {
        data["payout"] = payout
    }
    window.walletConnection.account().functionCall(
        common_contract_id,
        'nft_mint',
        data,
        GAS,
        utils.format.parseNearAmount('0.1')
    )
}