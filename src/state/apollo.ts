import {ApolloClient, InMemoryCache} from "@apollo/client";
import {IndexerEndpoint} from "../graphql/config";

export const setupApolloClient = () => {
    const cache = setupCache()
    return new ApolloClient({
        uri: IndexerEndpoint.Main,
        cache
    })
}

const setupCache = () => {
    return new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {

                    },
                },
            },
        }
    )
}