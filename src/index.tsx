import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";
import {setupStore} from "./state/store";

// Needed for near-api-js lib
import {Buffer} from "buffer"
(window as any).Buffer = Buffer;


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