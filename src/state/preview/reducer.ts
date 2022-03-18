import {combineReducers} from "redux";
import {previewCollectionReducer} from "./collection/slice";

export const previewReducer = combineReducers({
    collection: previewCollectionReducer,
})