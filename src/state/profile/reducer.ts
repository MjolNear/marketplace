import {combineReducers} from "redux";
import {profileNftsReducer} from "./nfts/slice";

export const profileReducer = combineReducers({
    nfts: profileNftsReducer
})
