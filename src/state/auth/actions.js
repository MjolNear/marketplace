import {login} from "../../business-logic/near/contract";

export const TOGGLE_WALLET_CONNECTION = "TOGGLE_WALLET_CONNECTION"
export const SIGN_IN = "SIGN_IN"
export const LOG_OUT = "LOG_OUT"


export const toggleWalletConnection = (isWalletConnected) => ({
    type: TOGGLE_WALLET_CONNECTION,
    payload: isWalletConnected
})

export const signIn = (accountId) => ({
    type: SIGN_IN,
    payload: accountId
})

export const logout = () => ({
    type: LOG_OUT
})

export const requestSignIn = () => {
    login
        .then(data => console.log(data))
        .catch(e => console.log(e))
}