import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum ProfileNftsTab {
    All = "All NFTs",
    Listed = "Listed NFTs",
    History = "History"
}

export interface ProfileState {
    tabs: ProfileNftsTab[],
    activeTab: ProfileNftsTab,
}

const initialState: ProfileState = {
    tabs: [ProfileNftsTab.All, ProfileNftsTab.Listed, ProfileNftsTab.History],
    activeTab: ProfileNftsTab.All,
}

export const profileTabsSlice = createSlice({
    name: "profile-nfts-tabs",
    initialState,
    reducers: {
        changeTab: (state, action: PayloadAction<ProfileNftsTab>) => {
            state.activeTab = action.payload
        },
        reset: () => initialState
    }
})

export const profileTabsReducer = profileTabsSlice.reducer