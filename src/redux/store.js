import {createStore} from "redux";
import {rootReducers} from "./root-reducers";

export const store = createStore(rootReducers)