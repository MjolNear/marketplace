import {combineReducers} from "redux";
import {previewNftReducer} from "./nft/slice";
import {previewCollectionReducer} from "./collection/slice";

export const previewReducer = combineReducers({
    nft: previewNftReducer,
    collection: previewCollectionReducer,
})