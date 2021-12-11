import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {initContract} from './utils/contract-utils'
import App from "./components/App";

window.nearInitPromise = initContract()
    .then(() => {
        ReactDOM.render(
            <App/>,
            document.querySelector('#root')
        )
    })
    .catch(console.error);