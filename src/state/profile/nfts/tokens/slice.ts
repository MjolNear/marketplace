import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {GridToken} from "../../../../business-logic/models/nft";
import {ContractId} from "../../../../business-logic/types/aliases";
import {TContractResponse} from "../../../../business-logic/near/api/types/response/contracts";

export interface ProfileTokensState {
    tokens: GridToken[],
    contracts: Record<ContractId, TContractResponse>,
    fetching: boolean
}

const initialState: ProfileTokensState = {
    tokens: [],
    contracts: {},
    fetching: true
}

export const profileTokensSlice = createSlice({
    name: "profile-nfts-tokens",
    initialState,
    reducers: {
        setContracts: (state, action: PayloadAction<(TContractResponse | undefined)[]>) => {
            action.payload.forEach(contract => {
                if (contract) {
                    state.contracts[contract.contractId] = contract
                }
            })
        },
        setNfts: (state, action: PayloadAction<GridToken[]>) => {
            state.tokens = action.payload
        },

        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState
    }
})


export const profileTokensReducer = profileTokensSlice.reducer