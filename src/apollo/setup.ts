import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from "@apollo/client";
import {CollectionIndexerEndpoint, MarketIndexerEndpoint} from "./config";
import {getDirectiveArgumentValueFromOperation, offsetLimitPagination} from "./utils";

export const setupApolloClient = () => {
    const cache = setupCache()

    const link = ApolloLink.split(
        operation => {
            const api = getDirectiveArgumentValueFromOperation(operation, "api", "name")
            return api === "market"
        },
        new HttpLink({
            uri: MarketIndexerEndpoint.Backup
        }),
        new HttpLink({
            uri: CollectionIndexerEndpoint.Main
        })
    )

    return new ApolloClient({
        link,
        cache
    })
}

const setupCache = () => {
    return new InMemoryCache({
            typePolicies: {
                Account: {
                    keyFields: ["id"]
                },
                Activity: {
                    keyFields: ["id"]
                },
                Collection: {
                    keyFields: ["id"]
                },
                MarketToken: {
                    keyFields: ["id"]
                },
                Query: {
                    fields: {
                        activities: {
                            ...offsetLimitPagination(["orderBy", "orderDirection", "where"])
                        },
                        collections: {
                            ...offsetLimitPagination(["where"])
                        },
                        collectionsSearch: {
                          ...offsetLimitPagination(["text"])
                        },
                        marketTokens: {
                            ...offsetLimitPagination(["orderBy", "orderDirection", "where"])
                        },
                        marketSearch: {
                            ...offsetLimitPagination(["text"])
                        }
                    },
                }
            },
        }
    )
}