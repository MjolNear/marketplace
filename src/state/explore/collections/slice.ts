import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BlockchainCollection} from "../../../business-logic/types/collection";
import {CollectionsBatchResponse} from "../../../near/api/types/response/collection";

export interface ExploreCollectionsState {
    collections: BlockchainCollection[],
    fetching: boolean,
    from: number,
    limit: number,
    hasMore: boolean,
    total: number
}

const initialState: ExploreCollectionsState = {
    collections: [],
    fetching: true,
    from: 0,
    limit: 12,
    hasMore: true,
    total: 0
}

export const exploreCollectionsSlice = createSlice({
    name: "explore-collections",
    initialState,
    reducers: {
        setPageData: (state, action: PayloadAction<CollectionsBatchResponse>) => {
            state.collections = state.collections.concat(action.payload.collections)
            state.total = action.payload.total_count
            state.hasMore = action.payload.has_next_batch
            state.from += state.limit
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState
    }
})

export const exploreCollectionsReducer = exploreCollectionsSlice.reducer;