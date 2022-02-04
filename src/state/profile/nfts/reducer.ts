import {combineReducers} from "redux";
import {profileTabsReducer} from "./slice";
import {profileTokensReducer} from "./tokens/slice";
import {profileHistoryReducer} from "./history/slice";

export const profileNftsReducer = combineReducers({
    tabs: profileTabsReducer,
    tokens: profileTokensReducer,
    history: profileHistoryReducer
})