import {combineReducers} from "redux";
import {profileCollectionsReducer} from "./collections/slice";
import {profileNftsReducer} from "./nfts/reducer";

export const profileReducer = combineReducers({
    nfts: profileNftsReducer,
    collections: profileCollectionsReducer
})
