import {CollectionId, ContractId} from "../../@types/Aliases";
import {useGenericListDataQuery} from "./useGenericListDataQuery";
import {
    Activity_OrderBy,
    ActivityEventType,
    CollectionActivityQuery,
    OrderDirection,
    useCollectionActivityQuery
} from "../../graphql/generated/graphql";
import {MJOL_CONTRACT_ID} from "../../near/enviroment/contract-names";
import {collectionUID} from "../../@types/utils";

const collectionActivitiesMapper = (
    data?: CollectionActivityQuery
) => data?.activities || []

export const useCollectionActivity = (
    limit: number,
    contractId: ContractId,
    collectionId: CollectionId,
    orderBy: Activity_OrderBy,
    orderDirection: OrderDirection,
    events: ActivityEventType[]
) => {
    return useGenericListDataQuery(useCollectionActivityQuery, collectionActivitiesMapper,
        {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                id: collectionUID(contractId, collectionId),
                limit,
                offset: 0,
                orderBy,
                orderDirection,
                events
            }
        })
}