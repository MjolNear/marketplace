import {combineReducers} from "redux";
import {exploreNftsReducer} from "./nfts/slice";

export const exploreReducer = combineReducers({
    nfts: exploreNftsReducer
})