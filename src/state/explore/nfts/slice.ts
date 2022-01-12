import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nft} from "../../../business-logic/models/nft";

export interface ExploreNftsState {
    nfts: Array<Nft>,
    fetching: boolean,
}

const initialState: ExploreNftsState = {
    nfts: [],
    fetching: true
}

export const exploreNftsSlice = createSlice({
    name: "explore-nfts",
    initialState,
    reducers: {
        addNft: (state, action: PayloadAction<Nft>) => {
            state.nfts.push(action.payload)
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState
    }
})

export const exploreNftsReducer = exploreNftsSlice.reducer;