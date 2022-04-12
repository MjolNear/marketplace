import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from "@apollo/client";
import {CollectionIndexerEndpoint, MarketIndexerEndpoint} from "../graphql/config";
import {getDirectiveArgumentValueFromOperation, offsetLimitMerge} from "./utils";

export const setupApolloClient = () => {
    const cache = setupCache()

    const federationLink = ApolloLink.split(
        operation => {
            const api = getDirectiveArgumentValueFromOperation(operation, "api", "name")
            return api === "market"
        },
        new HttpLink({
            uri: MarketIndexerEndpoint.BackupV2
        }),
        new HttpLink({
            uri: CollectionIndexerEndpoint.Main
        })
    )

    return new ApolloClient({
        link: federationLink,
        cache
    })
}

const setupCache = () => {
    return new InMemoryCache({
            typePolicies: {
                Collection: {
                    keyFields: ["id"]
                },
                MarketToken: {
                    keyFields: ["id"]
                },
                Query: {
                    fields: {
                        collections: {
                            keyArgs: ["where"],
                            merge(existing, incoming, options) {
                                return offsetLimitMerge({existing, incoming, options})
                            }
                        },

                        marketTokens: {
                            keyArgs: ["orderBy", "orderDirection", "where"],
                            merge(existing, incoming, options) {
                                return offsetLimitMerge({existing, incoming, options})
                            }
                        }
                    },
                }
            },
        }
    )
}