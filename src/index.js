import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {initContract} from './utils/contract-utils'
import AppRouter from "./app-router/App";
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";


const rootElement = document.getElementById("root");
console.log('here')
window.nearInitPromise = initContract()
    .then(() => {
        ReactDOM.render(
            <BrowserRouter>
                <AppRouter state={state}/>
            </BrowserRouter>,
            rootElement
        );
    })
    .catch(console.error);