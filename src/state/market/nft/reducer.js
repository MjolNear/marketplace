import {SET_NFT_TRANSACTION_PENDING, SET_NFT_TRANSACTION_SUCCESS} from "./actions";

const initialState = {
    pending: false,
    success: false,
}

export const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NFT_TRANSACTION_SUCCESS:
            return {
                ...state,
                success: action.payload
            }
        case SET_NFT_TRANSACTION_PENDING:
            return {
                ...state,
                pending: action.payload
            }
        default:
            return state
    }
}