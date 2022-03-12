import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CollectionInfo} from "../../../business-logic/models/collection";
import {Optional} from "../../../business-logic/models/types";
import {Token} from "../../../business-logic/models/nft";
import {TokensBatch} from "../../../business-logic/near/api/market/get-nfts-market";

export interface CollectionNftsState {
    tokens: Token[],
    fetching: boolean,
    from: number,
    limit: number,
    hasMore: boolean,
    total: number
}

const collectionNftsInitialState: CollectionNftsState = {
    tokens: [],
    fetching: false,
    from: 0,
    limit: 12,
    hasMore: true,
    total: 0
}

export interface PreviewCollectionState {
    fetching: boolean,
    collection: Optional<CollectionInfo>,
    nftsState: CollectionNftsState
}


const initialState: PreviewCollectionState = {
    collection: null,
    fetching: true,
    nftsState: collectionNftsInitialState
}

export const previewCollectionSlice = createSlice({
    name: "preview-collection",
    initialState,
    reducers: {
        setTotalSupply: (state, action: PayloadAction<number | undefined>) => {
            state.nftsState.total = action.payload
                ? action.payload
                : 0
        },
        setCollection: (state, action: PayloadAction<Optional<CollectionInfo>>) => {
            state.collection = action.payload
        },
        setNftsBatch: (state, action: PayloadAction<TokensBatch>) => {
            state.nftsState.tokens = state.nftsState.tokens.concat(action.payload.tokens)
            state.nftsState.hasMore = action.payload.hasMore
            state.nftsState.from += state.nftsState.limit
        },
        toggleNftsFetching: (state, action: PayloadAction<boolean>) => {
            state.nftsState.fetching = action.payload
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState,

        resetLimits: (state) => {
            state.nftsState = {...collectionNftsInitialState, total: state.nftsState.total}
        }
    }
})

export const previewCollectionReducer = previewCollectionSlice.reducer