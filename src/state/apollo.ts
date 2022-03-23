import {ApolloClient, InMemoryCache} from "@apollo/client";
import {IndexerEndpoint} from "../graphql/config";
import {offsetLimitPagination} from "@apollo/client/utilities";

export const setupApolloClient = () => {
    const cache = setupCache()
    return new ApolloClient({
        uri: IndexerEndpoint.BackupV2,
        cache
    })
}

const setupCache = () => {
    return new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        // marketTokens: offsetLimitPagination()
                    },
                },
            },
        }
    )
}