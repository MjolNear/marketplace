import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {previewReducer} from "./preview/reducer";
import {profileReducer} from "./profile/reducer";

export const rootReducer = combineReducers({
    profile: profileReducer,
    preview: previewReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']


export const getCollectionTokens = (state: RootState) => state.preview.collectionTokens