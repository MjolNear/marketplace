import {applyMiddleware, compose, createStore} from "redux";
import {rootReducers} from "./root-reducers";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(thunkMiddleware))
)