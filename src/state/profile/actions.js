import {getNfts} from "../../business-logic/near/get-nfts";

export const CHANGE_PROFILE_TAB = "CHANGE_PROFILE_TAB"
export const SET_PROFILE_NFTS = "SET_PROFILE_NFTS"
export const SET_PROFILE_HISTORY = "SET_PROFILE_HISTORY"
export const ADD_PROFILE_NFT = "ADD_PROFILE_NFT"
export const SET_FETCHING_PROFILE_NFT = "SET_FETCHING_PROFILE_NFT"
export const CLEAR_PROFILE_STATE = "CLEAR_PROFILE_DATA"

export const changeProfileTab = (tab) => ({
    type: CHANGE_PROFILE_TAB,
    payload: tab
})

export const addNft = (nft) => ({
    type: ADD_PROFILE_NFT,
    payload: nft
})

export const setFetchingProfileNft = (fetching) => ({
    type: SET_FETCHING_PROFILE_NFT,
    payload: fetching
})

export const setProfileNfts = (nfts) => ({
    type: SET_PROFILE_NFTS,
    payload: nfts
})

export const setProfileHistory = (history) => ({
    type: SET_PROFILE_HISTORY,
    payload: history
})

export const clearProfileState = () => ({
    type: CLEAR_PROFILE_STATE
})

export const fetchMyNfts = (accountId) => (dispatch) => {
    dispatch(setFetchingProfileNft(true))
    getNfts(accountId)
        .then(nfts => nfts
            .map(nftPromise =>
                nftPromise
                    .then(nft => dispatch(addNft(nft)))
                    .catch(() => console.log('NFT not found'))
            )
        )
        .catch(() => dispatch(setProfileNfts([])))
        .finally(() => dispatch(setFetchingProfileNft(false)))
}