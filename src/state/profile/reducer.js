import {CHANGE_PROFILE_TAB, PUSH_NFT, SET_FETCHING, SET_HISTORY, SET_MY_NFTS} from "./actions";

const MY_NFT_TAB = "My NFT"
const MY_LISTED_TAB = "My Listed NFT"
const MY_HISTORY_TAB = "My History"

const initialState = {
    tabs: [
        {name: MY_NFT_TAB, path: '/profile/nfts'},
        {name: MY_LISTED_TAB, path: '/profile/listed'},
        {name: MY_HISTORY_TAB, path: '/profile/history'},
    ],
    activeTab: MY_NFT_TAB,
    fetching: false,
    nfts: [],
    tags: [],
    history: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PROFILE_TAB:
            return {
                ...state,
                activeTab: action.payload,
                tags: [...state.nfts.filter(nft => {
                        switch (action.payload) {
                            case MY_LISTED_TAB:
                                return nft.price !== null
                            case MY_NFT_TAB:
                                return true
                            default:
                                return false
                        }
                    }
                )]
            }
        case PUSH_NFT:
            return {
                ...state,
                nfts: [...state.nfts, action.payload],
                tags: [...state.nfts, action.payload]
            }
        case SET_FETCHING:
            return {
                ...state,
                fetching: action.payload
            }
        case SET_MY_NFTS:
            return {
                ...state,
                nfts: action.payload,
                tags: action.payload
            }
        case SET_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        default:
            return state
    }
}