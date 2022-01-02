import {applyMiddleware, createStore} from "redux";
import {rootReducers} from "./root-reducers";
import thunk from "redux-thunk";

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)

window.store = store