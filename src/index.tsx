import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";
import App from "./App";
import {setupStore} from "./state/store";

// Needed for near-api-js lib
import {Buffer} from "buffer"
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

(window as any).Buffer = Buffer;


const store = setupStore()

const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/mjolnear/indexer',
    cache: new InMemoryCache({
        resultCacheMaxSize: 0
    })
});


ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <ApolloProvider client={client}>
                <ReduxProvider store={store}>
                    <App/>
                </ReduxProvider>
            </ApolloProvider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
)