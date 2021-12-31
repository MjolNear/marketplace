import {CHANGE_PROFILE_TAB, PUSH_NFT, SET_FETCHING, SET_HISTORY, SET_MY_NFTS} from "../actions/profile";

const MY_NFT_TAB = "My NFT"
const MY_LISTED_TAB = "My Listed NFT"
const MY_HISTORY_TAB = "My History"

const initialState = {
    tabs: [
        {name: MY_NFT_TAB, path: '/me/nfts'},
        {name: MY_LISTED_TAB, path: '/me/listed'},
        {name: MY_HISTORY_TAB, path: '/me/history'},
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
                activeTab: action.tab,
                tags: [...state.nfts.filter(nft => {
                        switch (action.tab) {
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
                nfts: [...state.nfts, action.nft],
                tags: [...state.nfts, action.nft]
            }
        case SET_FETCHING:
            return {
                ...state,
                fetching: action.fetching
            }
        case SET_MY_NFTS:
            return {
                ...state,
                nfts: action.nfts,
                tags: action.nfts
            }
        case SET_HISTORY:
            return {
                ...state,
                history: action.history
            }
        default:
            return state
    }
}