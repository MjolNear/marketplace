export const BUY_NFT = "BUY_NFT"
export const SELL_NFT = "SELL_NFT"
export const SET_NFT = "SET_NFT"
export const SET_FETCHING = "SET_FETCHING"

export const buyNFT = (id) => ({
    action: BUY_NFT,
    payload: id
})

export const sellNFT = (id) => ({
    action: SELL_NFT,
    payload: id
})

export const setNFT = (nft) => ({
    type: SET_NFT,
    payload: nft
})

export const setFetching = (fetching) => ({
    type: SET_FETCHING,
    payload: fetching
})