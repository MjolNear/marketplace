import {NFT} from "../../../business-logic/models/NFT";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ExploreNftsState {
    nfts: Array<NFT>,
    fetching: boolean,
    success: boolean | null
}

const initialState: ExploreNftsState = {
    nfts: [],
    fetching: true,
    success: null
}

export const exploreNftsSlice = createSlice({
    name: "explore-nfts",
    initialState,
    reducers: {
        addNft: (state, action: PayloadAction<NFT>) => {
            state.nfts.push(action.payload)
        },
        startFetching: (state) => {
            state.fetching = true
        },
        success: (state) => {
            state.success = true
            state.fetching = false
        },
        failure: (state) => {
            state.success = false
            state.fetching = false
        },
        reset: () => initialState
    }
})

export const exploreNftsReducer = exploreNftsSlice.reducer;