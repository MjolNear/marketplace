import {BUY_NFT, SELL_NFT, SET_ERROR, SET_FETCHING, SET_NFT} from "./actions";

const initialState = {
    nft: null,
    isError: false,
    isFetching: false
}

export const previewNftReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_NFT:
            return state
        case SELL_NFT:
            return state
        case SET_NFT:
            return {
                ...state,
                nft: action.payload
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state
    }
}