import {CHANGE_PROFILE_TAB, FETCH_HISTORY, FETCH_MY_NFTS} from "../actions/profile";

const initialState = {
    tabs: [
        {name: 'My NFT', path: '/me/nfts'},
        {name: 'My Listed NFT', path: '/me/listed'},
        {name: 'My History', path: '/me/history'},
    ],
    activeTab: 'My NFT',
    nfts: [],
    history: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PROFILE_TAB:
            return {
                ...state,
                activeTab: action.tab
            }
        case FETCH_MY_NFTS:
            return {
                ...state,
                nfts: action.nfts
            }
        case FETCH_HISTORY:
            return {
                ...state,
                history: action.history
            }
        default:
            return state
    }
}