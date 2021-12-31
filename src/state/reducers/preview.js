import {BUY_NFT, SELL_NFT, SET_FETCHING, SET_NFT} from "../actions/preview";

const initialState = {
    nft: null,
    fetching: false
}

export const previewReducer = (state = initialState, action) => {
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
                fetching: action.payload
            }
        default:
            return state
    }
}