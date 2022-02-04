import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nft} from "../../../../business-logic/models/nft";
import {ContractInfo} from "../../../../business-logic/models/contract";

export interface ProfileTokensState {
    nfts: Nft[],
    contracts: ContractInfo[],
    fetching: boolean
}

const initialState: ProfileTokensState = {
    nfts: [],
    contracts: [],
    fetching: false
}

export const profileTokensSlice = createSlice({
    name: "profile-nfts-tokens",
    initialState,
    reducers: {
        setPageData: (state, action: PayloadAction<Nft[]>) => {
            state.nfts = action.payload
        },
        addNft: (state, action: PayloadAction<Nft>) => {
            state.nfts.push(action.payload)
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        reset: () => initialState
    }
})


export const profileTokensReducer = profileTokensSlice.reducer