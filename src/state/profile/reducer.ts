import {combineReducers} from "redux";
import {profileNftsReducer} from "./nfts/reducer";

export const profileReducer = combineReducers({
    nfts: profileNftsReducer
})
