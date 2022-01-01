import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {initContract} from './business-logic/near/contract'
import {BrowserRouter} from "react-router-dom";
import {store} from "./state/store";
import {Provider} from "react-redux";
import App from "./launch/App";

const render = () =>
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById("root")
    )

window.nearInitPromise = initContract()
    .then(render)
    .catch(console.error);