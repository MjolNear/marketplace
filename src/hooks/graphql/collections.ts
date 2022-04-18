import {useGenericListDataQuery} from "./useGenericListDataQuery";
import {GridCollection} from "../../business-logic/types/collection";
import {
    CollectionsQuery,
    CollectionsQueryVariables,
    CollectionsTextSearchQuery,
    CollectionsTextSearchQueryVariables,
    useCollectionsQuery,
    useCollectionsTextSearchQuery,
    UserCollectionsQuery,
    UserCollectionsQueryVariables,
    useUserCollectionsQuery
} from "../../graphql/generated/collections-graphql";
import {AccountId} from "../../business-logic/types/aliases";


export const useCollections = (
    limit: number
) => {
    return useGenericListDataQuery<GridCollection, CollectionsQuery, CollectionsQueryVariables>(
        useCollectionsQuery, data => data?.collections || [], {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                limit,
                offset: 0,
            }
        }
    )
}

export const useAccountCollections = (
    limit: number,
    ownerId: AccountId
) => {
    return useGenericListDataQuery<GridCollection, UserCollectionsQuery, UserCollectionsQueryVariables>(
        useUserCollectionsQuery, data => data?.collections || [], {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                ownerId,
                limit,
                offset: 0,
            }
        }
    )
}

export const useCollectionsTextSearch = (
    text: string,
    limit: number
) => {
    return useGenericListDataQuery<GridCollection, CollectionsTextSearchQuery, CollectionsTextSearchQueryVariables>(
        useCollectionsTextSearchQuery, data => data?.collections || [], {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                text,
                limit,
                offset: 0,
            }
        }
    )
}