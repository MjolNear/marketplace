import {BUY_NFT, SELL_NFT} from "../actions/preview";

export const previewReducer = (state = {}, action) => {
    switch (action.type) {
        case BUY_NFT:
            return state
        case SELL_NFT:
            return state
        default:
            return state
    }
}