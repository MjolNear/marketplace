import {SET_ACCOUNT_ID, TOGGLE_WALLET_CONNECTION} from "./actions";

const initialState = {
    isWalletConnected: false,
    accountId: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_WALLET_CONNECTION:
            return {
                ...state,
                isWalletConnected: action.payload
            }
        case SET_ACCOUNT_ID:
            return {
                ...state,
                accountId: action.payload
            }
        default:
            return state
    }
}

