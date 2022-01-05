import {createSlice} from "@reduxjs/toolkit";

export interface TransactionState {
    pending?: boolean
    success?: boolean
}

const initialState: TransactionState = {
    pending: undefined,
    success: undefined
}

export const NftMarketTransactionSlice = createSlice({
    name: 'nft-market-transaction',
    initialState,
    reducers: {
        commitTransaction: (state) => {
            state.pending = true
        },
        successTransaction: (state) => {
            state.success = true
        },
        failureTransaction: (state) => {
            state.success = false
        }
    }
})