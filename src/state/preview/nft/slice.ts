import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ApprovedToken, Token} from "../../../business-logic/models/nft";
import {
    ContractResponse,
    ContractStatusResponse,
    ContractStatusResponseCode
} from "../../../business-logic/near/api/types/response/contracts";

export interface PreviewNftState {
    fetching: boolean,
    success?: boolean,
    token?: Token,
    contract?: ContractResponse,
    isApproved?: boolean,
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
        success: (state, action: PayloadAction<ApprovedToken>) => {
            state.token = action.payload
            state.isApproved = action.payload.isApproved
        },
        failure: (state) => {
            state.token = undefined
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        setContract: (state, action: PayloadAction<ContractStatusResponse>) => {
            if (action.payload.status === ContractStatusResponseCode.SUCCESS) {
                state.contract = action.payload.data
            }
        },
        setPayouts: (state, action: PayloadAction<Record<string, number>>) => {
            state.payouts = action.payload
        },
        reset: () => initialState
    }
})

export const previewNftReducer = previewNftSlice.reducer