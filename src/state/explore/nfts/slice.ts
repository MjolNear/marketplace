import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nft} from "../../../business-logic/models/nft";

export interface ExploreNftsState {
    nfts: Array<Nft>,
    fetching: boolean,
    success: boolean | undefined
}

const initialState: ExploreNftsState = {
    nfts: [],
    fetching: true,
    success: undefined
}

export const exploreNftsSlice = createSlice({
    name: "explore-nfts",
    initialState,
    reducers: {
        addNft: (state, action: PayloadAction<Nft | null>) => {
            if (action.payload) {
                state.nfts.push(action.payload)
            }
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