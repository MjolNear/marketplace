import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {profileReducer} from "./profile/slice";
import {previewReducer} from "./preview/reducer";
import {navbarReducer} from "./navbar/slice";
import {exploreReducer} from "./explore/reducer";


export const rootReducer = combineReducers({
    navbar: navbarReducer,
    profile: profileReducer,
    preview: previewReducer,
    explore: exploreReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']