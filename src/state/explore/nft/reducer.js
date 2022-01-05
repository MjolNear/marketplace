import {ADD_EXPLORE_NFT, CLEAR_EXPLORE_NFT_STATE, SET_FETCHING_EXPLORE_NFT, SET_PAGINATION_INDEX} from "./actions";

const initialState = {
    index: 0,
    fetching: true,
    nfts: []
}

export const exploreNftReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGINATION_INDEX:
            return {
                ...state,
                index: action.payload
            }
        case SET_FETCHING_EXPLORE_NFT:
            return {
                ...state,
                fetching: action.payload
            }
        case ADD_EXPLORE_NFT:
            return {
                ...state,
                nfts: [...state.nfts, action.payload]
            }
        case CLEAR_EXPLORE_NFT_STATE:
            return {
                index: 0,
                fetching: false,
                nfts: []
            }
        default:
            return state
    }
}