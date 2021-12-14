import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {initContract} from './utils/contract-utils'
import App from "./App";
import {BrowserRouter} from "react-router-dom";


const rootElement = document.getElementById("root");
window.nearInitPromise = initContract()
    .then(() => {
        ReactDOM.render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>,
            rootElement
        );
    })
    .catch(console.error);