import {combineReducers} from "redux";
import {profileReducer} from "./reducers/profile";
import {navbarReducer} from "./reducers/navbar";

export const reducers = combineReducers({
    profile: profileReducer,
    navbar: navbarReducer,
})