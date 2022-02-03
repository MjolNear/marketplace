import {combineReducers} from "redux";
import {exploreNftsReducer} from "./nfts/slice";
import {exploreCollectionsReducer} from "./collections/slice";

export const exploreReducer = combineReducers({
    nfts: exploreNftsReducer,
    collections: exploreCollectionsReducer
})