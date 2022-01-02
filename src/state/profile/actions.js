import {getNfts} from "../../business-logic/near/get-nfts";

export const CHANGE_PROFILE_TAB = "CHANGE_PROFILE_TAB"
export const SET_MY_NFTS = "SET_MY_NFTS"
export const SET_HISTORY = "SET_HISTORY"
export const ADD_PROFILE_NFT = "ADD_PROFILE_NFT"
export const SET_FETCHING_PROFILE_NFT = "SET_FETCHING_PROFILE_NFT"
export const CLEAR_PROFILE_DATA = "CLEAR_PROFILE_DATA"

export const changeProfileTab = (tab) => ({
    type: CHANGE_PROFILE_TAB,
    payload: tab
})

export const addNft = (nft) => ({
    type: ADD_PROFILE_NFT,
    payload: nft
})

export const setFetching = (fetching) => ({
    type: SET_FETCHING_PROFILE_NFT,
    payload: fetching
})

export const setNfts = (nfts) => ({
    type: SET_MY_NFTS,
    payload: nfts
})

export const setHistory = (history) => ({
    type: SET_HISTORY,
    payload: history
})

export const clearProfileData = () => ({
    type: CLEAR_PROFILE_DATA
})

export const fetchMyNfts = (accountId) => (dispatch) => {
    dispatch(setFetching(true))
    getNfts(accountId)
        .then(nfts => nfts
            .map(nftPromise =>
                nftPromise
                    .then(nft => dispatch(addNft(nft)))
                    .catch(() => console.log('NFT not found'))
            )
        )
        .catch(() => dispatch(setNfts([])))
        .finally(() => dispatch(setFetching(false)))
}