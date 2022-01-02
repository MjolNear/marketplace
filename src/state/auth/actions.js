export const TOGGLE_WALLET_CONNECTION = "TOGGLE_WALLET_CONNECTION"
export const SET_ACCOUNT_ID = "SET_ACCOUNT_ID"


export const toggleWalletConnection = (isWalletConnected) => ({
    type: TOGGLE_WALLET_CONNECTION,
    payload: isWalletConnected
})

export const setAccountId = (accountId) => ({
    type: SET_ACCOUNT_ID,
    payload: accountId
})