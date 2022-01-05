import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {initContract} from './business-logic/api/near/contract/contract'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./launch/App";
import {setupStore} from "./state/store";

const store = setupStore()

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