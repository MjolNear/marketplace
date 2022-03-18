import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {previewReducer} from "./preview/reducer";
import {navbarReducer} from "./navbar/slice";
import {exploreReducer} from "./explore/reducer";
import {profileReducer} from "./profile/reducer";
import {FinalExecutionOutcome} from "near-api-js/lib/providers";

interface srss {
    outcome?: FinalExecutionOutcome
}

const sta: srss = {}

export const outcomeSlice = createSlice({
    name: "outcome",
    initialState: sta,
    reducers: {
        save: (state, action: PayloadAction<FinalExecutionOutcome>) => {
            state.outcome = action.payload
        }
    }
})


export const rootReducer = combineReducers({
    navbar: navbarReducer,
    profile: profileReducer,
    preview: previewReducer,
    explore: exploreReducer,
    outcome: outcomeSlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']