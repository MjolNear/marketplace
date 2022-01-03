export const ADD_PROFILE_NFT = "ADD_PROFILE_NFT"
export const SET_PROFILE_NFTS_FETCHING = "SET_PROFILE_NFTS_FETCHING"
export const SET_PROFILE_NFTS_ERROR = "SET_PROFILE_NFTS_ERROR"
export const SET_PROFILE_NFTS = "SET_PROFILE_NFTS"

export const addProfileNft = (nft) => ({
    type: ADD_PROFILE_NFT,
    payload: nft
})

export const setProfileNftsFetching = (isFetching) => ({
    type: SET_PROFILE_NFTS_FETCHING,
    payload: isFetching
})

export const setProfileNftError = (isErrorOccurred) => ({
    type: SET_PROFILE_NFTS_ERROR,
    payload: isErrorOccurred
})

export const setProfileNfts = (nfts) => ({
    type: SET_PROFILE_NFTS,
    payload: nfts
})