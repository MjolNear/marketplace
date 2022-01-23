import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import {setupStore} from "./state/store";

const store = setupStore()

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
)