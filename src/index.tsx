import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider as ReduxProvider} from "react-redux";
import App from "./App";
import {ApolloProvider} from '@apollo/client';

import {setupStore} from "./state/store";
import {setupApolloClient} from "./state/apollo";

// Needed for near-api-js lib
import {Buffer} from "buffer"
(window as any).Buffer = Buffer;


const store = setupStore()
const client = setupApolloClient()

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ReduxProvider store={store}>
                <App/>
            </ReduxProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
)