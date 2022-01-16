import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nft} from "../../../business-logic/models/nft";
import {act} from "react-dom/test-utils";

export interface PreviewNftState {
    fetching: boolean,
    success?: boolean,
    nft?: Nft,
    payouts: Record<string, number>
}


const initialState: PreviewNftState = {
    payouts: {},
    fetching: true,
}

export const previewNftSlice = createSlice({
    name: "preview-nft",
    initialState,
    reducers: {
        success: (state, action: PayloadAction<Nft>) => {
            state.nft = action.payload
        },
        failure: (state) => {
            state.nft = undefined
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        setPayouts: (state, action: PayloadAction<Record<string, number>>) => {
            state.payouts = action.payload
        },
        reset: () => initialState
    }
})

export const previewNftReducer = previewNftSlice.reducer