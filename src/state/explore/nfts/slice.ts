import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nft} from "../../../business-logic/models/nft";
import {TokensBatch} from "../../../business-logic/near/api/market/get-nfts-market";

export interface ExploreNftsState {
    nfts: Nft[],
    fetching: boolean,
    from: number,
    limit: number,
    hasMore: boolean,
    total: number
}

const initialState: ExploreNftsState = {
    nfts: [],
    fetching: true,
    from: 0,
    limit: 4,
    hasMore: true,
    total: 0
}

export const exploreNftsSlice = createSlice({
    name: "explore-nfts",
    initialState,
    reducers: {
        setPageData: (state, action: PayloadAction<Nft[]>) => {
            console.log(action.payload)
            state.nfts = state.nfts.concat(action.payload)
            state.hasMore = action.payload.length === state.limit
            state.from += state.limit
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState
    }
})

export const exploreNftsReducer = exploreNftsSlice.reducer;