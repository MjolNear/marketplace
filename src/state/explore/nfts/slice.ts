import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GridToken} from "../../../business-logic/types/nft";

export interface ExploreNftsState {
    tokens: GridToken[],
    fetching: boolean,
    from: number,
    limit: number,
    hasMore: boolean,
    total: number
}

const initialState: ExploreNftsState = {
    tokens: [],
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
        setPageData: (state, action: PayloadAction<GridToken[]>) => {
            console.log(action.payload)
            state.tokens = state.tokens.concat(action.payload)
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