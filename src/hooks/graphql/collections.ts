import {useGenericListDataQuery} from "./useGenericListDataQuery";
import {GridCollection} from "../../@types/Collection";
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
} from "../../graphql/generated/graphql";
import {AccountId} from "../../@types/Aliases";


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
    owner: AccountId
) => {
    return useGenericListDataQuery<GridCollection, UserCollectionsQuery, UserCollectionsQueryVariables>(
        useUserCollectionsQuery, data => data?.collections || [], {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                owner,
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