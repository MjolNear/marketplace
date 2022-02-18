import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";
import App from "./App";
import {setupStore} from "./state/store";
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {IndexerEndpoint} from "./graphql/config";

// Needed for near-api-js lib
import {Buffer} from "buffer"

(window as any).Buffer = Buffer;


const store = setupStore()

export const client = new ApolloClient({
    uri: IndexerEndpoint.Main,
    cache: new InMemoryCache()
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