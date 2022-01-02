import {getNfts} from "../../business-logic/near/get-nfts";

export const CHANGE_PROFILE_TAB = "CHANGE_PROFILE_TAB"
export const SET_MY_NFTS = "SET_MY_NFTS"
export const SET_HISTORY = "SET_HISTORY"
export const ADD_NFT = "PUSH_NFT"
export const SET_FETCHING = "SET_FETCHING"
export const SET_PROFILE = "SET_PROFILE"

export const changeProfileTab = (tab) => ({
    type: CHANGE_PROFILE_TAB,
    payload: tab
})

export const addNft = (nft) => ({
    type: ADD_NFT,
    payload: nft
})

export const setFetching = (fetching) => ({
    type: SET_FETCHING,
    payload: fetching
})

export const setNfts = (nfts) => ({
    type: SET_MY_NFTS,
    payload: nfts
})

export const setProfile = (profileId) => ({
    type: SET_PROFILE,
    payload: profileId
})

export const setHistory = (history) => ({
    type: SET_HISTORY,
    payload: history
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
        .finally(dispatch(setFetching(false)))
}