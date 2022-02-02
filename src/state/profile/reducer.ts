import {combineReducers} from "redux";
import {profileNftsReducer} from "./nfts/slice";
import {profileCollectionsReducer} from "./collections/slice";

export const profileReducer = combineReducers({
    nfts: profileNftsReducer,
    collections: profileCollectionsReducer
})
