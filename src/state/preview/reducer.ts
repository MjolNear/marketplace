import {combineReducers} from "redux";
import {collectionTokensReducer} from "./collection/slice";

export const previewReducer = combineReducers({
    // nft: previewNftReducer,
    collectionTokens: collectionTokensReducer,
})