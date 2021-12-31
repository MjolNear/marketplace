export const CHANGE_PROFILE_TAB = "CHANGE_PROFILE_TAB"
export const SET_MY_NFTS = "SET_MY_NFTS"
export const SET_HISTORY = "SET_HISTORY"
export const PUSH_NFT = "PUSH_NFT"
export const SET_FETCHING = "SET_FETCHING"

export const changeProfileTab = (tab) => ({
    type: CHANGE_PROFILE_TAB,
    tab
})

export const pushNFT = (nft) => ({
    type: PUSH_NFT,
    nft
})

export const setFetching = (fetching) => ({
    type: SET_FETCHING,
    fetching
})

export const setNfts = (nfts) => ({
    type: SET_MY_NFTS,
    nfts
})

export const setHistory = (history) => ({
    type: SET_HISTORY,
    history
})