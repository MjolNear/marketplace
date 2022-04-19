import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import {Provider as ReduxProvider} from "react-redux";
import App from "./App";
import {ApolloProvider} from '@apollo/client';

import {setupStore} from "./state/store";
import {setupApolloClient} from "./apollo";

// Needed for near-api-js lib
import {Buffer} from "buffer"
import {CardSizeProvider} from "./context/CardSizeContext";

(window as any).Buffer = Buffer;


const store = setupStore()
const client = setupApolloClient()

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ReduxProvider store={store}>
                <BrowserRouter>
                    <CardSizeProvider>
                        <App/>
                    </CardSizeProvider>
                </BrowserRouter>
            </ReduxProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
)