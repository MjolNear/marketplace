import {LOG_OUT, SIGN_IN} from "./actions";

const initialState = {
    isWalletConnected: false,
    accountId: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                accountId: action.payload,
                isWalletConnected: true
            }
        case LOG_OUT:
            return {
                accountId: null,
                isWalletConnected: false
            }
        default:
            return state
    }
}

