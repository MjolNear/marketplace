import {combineReducers} from "redux";
import {profileReducer} from "./reducers/profile";
import {navbarReducer} from "./reducers/navbar";

export const rootReducers = combineReducers({
    profile: profileReducer,
    navbar: navbarReducer,
})