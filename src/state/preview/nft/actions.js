import {getNftPayouts, getNFTsByContractAndTokenId} from "../../../business-logic/near/get-nfts";

export const BUY_NFT = "BUY_NFT"
export const SELL_NFT = "SELL_NFT"
export const SET_NFT = "SET_NFT"
export const SET_PAYOUTS = "SET_PAYOUTS"
export const SET_ERROR = "SET_ERROR"
export const SET_FETCHING = "SET_FETCHING"

export const buyNft = (id) => ({
    action: BUY_NFT,
    payload: id
})

export const sellNft = (id) => ({
    action: SELL_NFT,
    payload: id
})

export const setNft = (nft) => ({
    type: SET_NFT,
    payload: nft
})

export const setPayouts = (payouts) => ({
    type: SET_PAYOUTS,
    payload: payouts
})

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})

export const setFetching = (fetching) => ({
    type: SET_FETCHING, payload: fetching
})

export const fetchNft = (accountId, contractId, tokenId) => (dispatch) => {
    dispatch(setFetching(true))

    getNFTsByContractAndTokenId(accountId, contractId, tokenId)
        .then(nft => dispatch(setNft(nft)))
        .catch(() => dispatch(setError(true)))
        .finally(() => dispatch(setFetching(false)))

    getNftPayouts(accountId, contractId, tokenId)
        .then(payouts => dispatch(setPayouts(payouts)))
        .catch(() => console.log("Payouts not found"))
}

