import {combineReducers} from "redux";
import {previewNftReducer} from "./nft/slice";

export const previewReducer = combineReducers({
    nft: previewNftReducer
})