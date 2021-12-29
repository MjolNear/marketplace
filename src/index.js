import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {initContract} from './business-logic/near/contract'
import AppRouter from "./launch/App";
import {BrowserRouter} from "react-router-dom";
import {state} from "./redux/state";


const rootElement = document.getElementById("root");
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