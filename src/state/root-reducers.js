import {combineReducers} from "redux";
import {profileReducer} from "./reducers/profile";
import {navbarReducer} from "./reducers/navbar";
import {previewReducer} from "./reducers/preview";

export const rootReducers = combineReducers({
    profile: profileReducer,
    navbar: navbarReducer,
    preview: previewReducer
})