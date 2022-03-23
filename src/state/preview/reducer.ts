import {combineReducers} from "redux";
import {previewNftReducer} from "./nft/slice";
import {collectionTokensReducer} from "./collection/slice";

export const previewReducer = combineReducers({
    nft: previewNftReducer,
    collectionTokens: collectionTokensReducer,
})