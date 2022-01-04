import {getMarketNfts} from "../../../business-logic/near/get-nfts-market";

export const SET_PAGINATION_INDEX = "SET_PAGINATION_INDEX"
export const SET_FETCHING_EXPLORE_NFT = "SET_FETCHING_EXPLORE_NFT"
export const ADD_EXPLORE_NFT = "ADD_EXPLORE_NFT"
export const CLEAR_EXPLORE_NFT_STATE = "CLEAR_EXPLORE_NFT_STATE"
export const SET_EXPLORE_NFTS = "SET_EXPLORE_NFTS"

const setPaginationIndex = (index) => ({
    type: SET_PAGINATION_INDEX,
    payload: index
})

const setExploreNfts = (nfts) => ({
    type: SET_EXPLORE_NFTS,
    payload: nfts
})

const setFetchingExploreNfts = (fetching) => ({
    type: SET_FETCHING_EXPLORE_NFT,
    payload: fetching
})

const addNft = (nft) => ({
    type: ADD_EXPLORE_NFT,
    payload: nft
})


export const clearExploreNftState = () => ({
    type: CLEAR_EXPLORE_NFT_STATE
})

export const fetchMarketNfts = (from, limit) => async (dispatch) => {
    dispatch(setFetchingExploreNfts(true))
    getMarketNfts(from, limit)
        .then(nfts => nfts
            .map(nftPromise =>
                nftPromise
                    .then(nft => dispatch(addNft(nft)))
                    .catch(() => console.log('NFT not found'))
            )
        )
        .catch(() => dispatch(setExploreNfts([])))
        .finally(() => dispatch(setFetchingExploreNfts(false)))
}