import {
    CHANGE_PROFILE_TAB,
    ADD_PROFILE_NFT,
    SET_FETCHING_PROFILE_NFT,
    SET_PROFILE_HISTORY,
    SET_PROFILE_NFTS,
    CLEAR_PROFILE_STATE
} from "./actions";

import {combineReducers} from "redux";
import {profileNftsReducer} from "./my-nfts/reducers";
import {profileHistoryReducer} from "./history/reducers";

const MY_NFT_TAB = "All NFTs"
const MY_LISTED_TAB = "Listed NFTs"
const MY_HISTORY_TAB = "History"


combineReducers({
    nfts: profileNftsReducer,
    history: profileHistoryReducer
})

const initialState = {
    tabs: [
        {name: MY_NFT_TAB, path: '/profile/nfts'},
        {name: MY_LISTED_TAB, path: '/profile/listed'},
        {name: MY_HISTORY_TAB, path: '/profile/history'},
    ],
    activeTab: MY_NFT_TAB,
    fetching: false,
    tags: [],
    nfts: [],
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
                                return nft.isListed()
                            case MY_NFT_TAB:
                                return true
                            case MY_HISTORY_TAB:
                                return false
                        }
                    }
                )]
            }
        case ADD_PROFILE_NFT:
            return {
                ...state,
                nfts: [...state.nfts, action.payload],
                // TODO: Fix if tab been changed
                tags: [...state.tags, action.payload]
            }
        case SET_FETCHING_PROFILE_NFT:
            return {
                ...state,
                fetching: action.payload
            }
        case SET_PROFILE_NFTS:
            return {
                ...state,
                nfts: action.payload,
            }
        case SET_PROFILE_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        case CLEAR_PROFILE_STATE:
            return {
                ...state,
                activeTab: MY_NFT_TAB,
                fetching: false,
                nfts: [],
                tags: [],
                history: [],
            }
        default:
            return state
    }
}