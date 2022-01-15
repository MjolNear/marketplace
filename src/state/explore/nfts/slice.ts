import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nft} from "../../../business-logic/models/nft";
import {MarketPage} from "../../../business-logic/near/api/market/get-nfts-market";

export interface ExploreNftsState {
    nfts: Array<Nft>,
    fetching: boolean,
    from: number,
    limit: number,
    hasMore: boolean,
    total: number
}

const initialState: ExploreNftsState = {
    nfts: [],
    fetching: false,
    from: 0,
    limit: 12,
    hasMore: true,
    total: 0
}

export const exploreNftsSlice = createSlice({
    name: "explore-nfts",
    initialState,
    reducers: {
        setPageData: (state, action: PayloadAction<MarketPage>) => {
            state.nfts = state.nfts.concat(action.payload.tokens)
            state.total = action.payload.total
            state.hasMore = action.payload.hasMore
            state.from += state.limit
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState
    }
})

export const exploreNftsReducer = exploreNftsSlice.reducer;