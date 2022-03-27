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
                MarketToken: {
                    keyFields: ["id"]
                },
                Query: {
                    fields: {
                        marketTokens: {
                            keyArgs: ["orderBy", "orderDirection", "where"],

                            merge(
                                existing,
                                incoming,
                                {args}
                            ) {
                                if (!args) {
                                    return [...existing, ...incoming]
                                }

                                const {skip = 0} = args

                                const merged = existing ? [...existing] : [];
                                for (let i = 0; i < incoming.length; ++i) {
                                    merged[skip + i] = incoming[i];
                                }

                                return merged;
                            }
                        }
                    },
                }
            },
        }
    )
}