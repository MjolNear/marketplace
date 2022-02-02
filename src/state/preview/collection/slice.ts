import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CollectionInfo} from "../../../business-logic/models/collection";
import {Optional} from "../../../business-logic/models/types";
import {CollectionTokens} from "../../../business-logic/near/api/types/response/collection";
import {mapMjolTokenToNFT, Nft} from "../../../business-logic/models/nft";
import {TokensBatch} from "../../../business-logic/near/api/market/get-nfts-market";

export interface CollectionNftsState {
    nfts: Nft[],
    fetching: boolean,
    from: number,
    limit: number,
    hasMore: boolean,
    total: number
}

const collectionNftsInitialState: CollectionNftsState = {
    nfts: [],
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
        setCollection: (state, action: PayloadAction<Optional<CollectionInfo>>) => {
            state.collection = action.payload
        },
        setNftsBatch: (state, action: PayloadAction<TokensBatch>) => {
            console.log(action.payload)
            state.nftsState.nfts = action.payload.tokens
            state.nftsState.hasMore = action.payload.hasMore
            state.nftsState.total = action.payload.total
            state.nftsState.from += state.nftsState.limit
        },
        toggleNftsFetching: (state, action: PayloadAction<boolean>) => {
            state.nftsState.fetching = action.payload
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState
    }
})

export const previewCollectionReducer = previewCollectionSlice.reducer