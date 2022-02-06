import {createSlice} from "@reduxjs/toolkit";

export interface ProfileHistoryState {
    history: any[],
    fetching: boolean
}

const initialState: ProfileHistoryState = {
    history: [],
    fetching: false
}

export const profileHistorySlice = createSlice({
    name: "profile-nfts-history",
    initialState,
    reducers: {
        reset: () => initialState
    }
})

export const profileHistoryReducer = profileHistorySlice.reducer
