import {TransactionStatus} from "../state";
import {createSlice} from "@reduxjs/toolkit";

const initialState: TransactionStatus = {
    pending: undefined,
    success: undefined
}

export const marketNftTransactionSlice = createSlice({
    name: 'market-nft-transaction',
    initialState,
    reducers: {
        commit: (state) => {
            state.pending = true
        },
        success: (state) => {
            state.success = true
            state.pending = false
        },
        failure: (state) => {
            state.success = false
            state.pending = false
        },
        reset: () => initialState
    }
})

export const marketNftTransactionReducer = marketNftTransactionSlice.reducer