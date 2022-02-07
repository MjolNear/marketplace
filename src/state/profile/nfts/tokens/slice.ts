import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nft} from "../../../../business-logic/models/nft";
import {ContractId} from "../../../../business-logic/models/types";
import {
    ContractResponse,
    ContractStatusResponse,
    ContractStatusResponseCode
} from "../../../../business-logic/near/api/types/response/contracts";

export interface ProfileTokensState {
    nfts: Nft[],
    contracts: Record<ContractId, ContractResponse>,
    fetching: boolean
}

const initialState: ProfileTokensState = {
    nfts: [],
    contracts: {},
    fetching: true
}

export const profileTokensSlice = createSlice({
    name: "profile-nfts-tokens",
    initialState,
    reducers: {
        setContracts: (state, action: PayloadAction<ContractStatusResponse[]>) => {
            action.payload.forEach(response => {
                if (response.status===ContractStatusResponseCode.SUCCESS) {
                    const contract = response.data
                    state.contracts[contract.contractId] = contract
                }
            })
        },
        setNfts: (state, action: PayloadAction<Nft[]>) => {
            state.nfts = action.payload
        },

        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState
    }
})


export const profileTokensReducer = profileTokensSlice.reducer