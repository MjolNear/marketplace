import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {initContract} from './business-logic/near/contract'
import AppRouter from "./launch/App";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store";
import {Provider} from "react-redux";

const render = () =>
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <AppRouter state={store.getState()}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById("root")
    )

window.nearInitPromise = initContract()
    .then(render)
    .catch(console.error);