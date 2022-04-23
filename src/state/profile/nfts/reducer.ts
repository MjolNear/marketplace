import {combineReducers} from "redux";
import {profileTabsReducer} from "./slice";
import {profileTokensReducer} from "./tokens/slice";

export const profileNftsReducer = combineReducers({
    tabs: profileTabsReducer,
    tokens: profileTokensReducer,
})