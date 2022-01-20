import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nft} from "../../../business-logic/models/nft";
import {ContractId} from "../../../business-logic/models/types";

export enum ProfileNftsTab {
    All = "All NFTs",
    Listed = "Listed NFTs",
    History = "My History"
}

export interface ProfileState {
    tabs: ProfileNftsTab[],
    activeTab: ProfileNftsTab,
    contracts: ContractId[],
    fetching: boolean,
    nfts: Nft[],
    history: []
}

const initialState: ProfileState = {
    tabs: [ProfileNftsTab.All, ProfileNftsTab.Listed, ProfileNftsTab.History],
    activeTab: ProfileNftsTab.All,
    fetching: false,
    contracts: [],
    nfts: [],
    history: []
}

export const profileNftsSlice = createSlice({
    name: "profile-nfts",
    initialState,
    reducers: {
        changeTab: (state, action: PayloadAction<ProfileNftsTab>) => {
            state.activeTab = action.payload
        },
        setPageData: (state, action: PayloadAction<Nft[]>) => {
            state.nfts = action.payload
        },
        addNft: (state, action: PayloadAction<any>) => {
            state.nfts.push(action.payload)
        },
        toggleFetching: (state, action: PayloadAction<boolean>) => {
            state.fetching = action.payload
        },
        resetNfts: (state) => {
            state.nfts = []
            state.fetching = true
        }
    }
})

export const profileNftsReducer = profileNftsSlice.reducer