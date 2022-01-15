import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Nft} from "../../business-logic/models/nft";

export enum PROFILE_TAB {
    ALL_NFTS = "All NFTs",
    LISTED_NFTS = "Listed NFTs",
    HISTORY = "My History"
}

export interface ProfileState {
    tabs: Array<PROFILE_TAB>,
    activeTab: PROFILE_TAB,
    fetching: boolean,
    nfts: Array<Nft>,
    history: []
}

const initialState: ProfileState = {
    tabs: [PROFILE_TAB.ALL_NFTS, PROFILE_TAB.LISTED_NFTS, PROFILE_TAB.HISTORY],
    activeTab: PROFILE_TAB.ALL_NFTS,
    fetching: true,
    nfts: [],
    history: []
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        changeTab: (state, action: PayloadAction<PROFILE_TAB>) => {
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

export const profileReducer = profileSlice.reducer