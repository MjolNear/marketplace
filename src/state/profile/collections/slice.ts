import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Collection} from "../../../business-logic/models/collection";


export interface ProfileState {
    collections: Collection[],
    fetching: boolean,
}

const initialState: ProfileState = {
    collections: [],
    fetching: false
}

export const profileCollectionsSlice = createSlice({
    name: "profile-collections",
    initialState,
    reducers: {
        setCollections: (state, action: PayloadAction<Collection[]>) => {
            state.collections = action.payload
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: (state) => {
            state.collections = []
            state.fetching = true
        }
    }
})

export const profileCollectionsReducer = profileCollectionsSlice.reducer