import {ApolloClient, ApolloLink, HttpLink, InMemoryCache, Operation} from "@apollo/client";
import {CollectionIndexerEndpoint, MarketIndexerEndpoint} from "../graphql/config";
import {Kind, OperationDefinitionNode, StringValueNode} from "graphql";


export const getDirectiveArgumentValueFromOperation = (
    operation: Operation,
    directiveName: string,
    argumentName: string
) => {
    const operationDefinition = operation.query.definitions.find(definition =>
        definition.kind === Kind.OPERATION_DEFINITION
    ) as OperationDefinitionNode

    const directive = operationDefinition.directives?.find(directive =>
        directive.name.value === directiveName
    )

    const argument = directive?.arguments?.find(argument =>
        argument.name.value === argumentName
    )?.value

    return argument ? (argument as StringValueNode).value : null
}

export const setupApolloClient = () => {
    const cache = setupCache()

    const federationLink = ApolloLink.split(
        operation => {
            const api = getDirectiveArgumentValueFromOperation(operation, "api", "name")
            return api === "market"
        },
        new HttpLink({
            uri: MarketIndexerEndpoint.Main
        }),
        new HttpLink({
            uri: CollectionIndexerEndpoint.MAIN
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