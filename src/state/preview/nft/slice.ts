import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nft} from "../../../business-logic/models/nft";

export interface PreviewNftState {
    fetching: boolean,
    success?: boolean,
    nft?: Nft,
    payouts: Array<any>
}


const initialState: PreviewNftState = {
    payouts: [],
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
        setPayouts: (state, action) => {
            state.payouts = Object.entries(action.payload).map(kv => {
                const [name, royalty] = kv
                return {name, value: `${royalty}%`}
            })
        },
        reset: () => initialState
    }
})

export const previewNftReducer = previewNftSlice.reducer