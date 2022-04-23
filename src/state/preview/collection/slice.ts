import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Token} from "../../../@types/Token";
import {TokensBatch} from "../../../near/api/market/get-nfts-market";

export interface CollectionNftsState {
    tokens: Token[],
    fetching: boolean,
    from: number,
    limit: number,
    hasMore: boolean,
}

const initialState: CollectionNftsState = {
    tokens: [],
    fetching: false,
    from: 0,
    limit: 12,
    hasMore: true,
}


export const collectionTokensSlice = createSlice({
    name: "preview-collection-nfts",
    initialState,
    reducers: {
        setNftsBatch: (state, action: PayloadAction<TokensBatch>) => {
            state.tokens = state.tokens.concat(action.payload.tokens)
            state.hasMore = action.payload.hasMore
            state.from += state.limit
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState,
    }
})

export const collectionTokensReducer = collectionTokensSlice.reducer