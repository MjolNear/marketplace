import {CollectionId, ContractId} from "../../business-logic/types/aliases";
import {useCollectionTotalStatsQuery} from "../../graphql/generated/market-graphql";
import {useFetchCollectionTokensSupply} from "./useFetchCollectionTokensSupply";

export interface FetchCollectionStatsHookResult {
    loading: boolean
    supply?: number
    floar?: string
    volume?: string
    sales?: string
    listed?: string
    average?: string
}

export const useFetchCollectionStats = (
    contractId: ContractId,
    collectionId: CollectionId
): FetchCollectionStatsHookResult => {

    const uid = `${contractId}-${collectionId}`

    const {loading: loadingStats, data} = useCollectionTotalStatsQuery({
        variables: {
            id: uid,
            stringId: uid
        }
    })

    const {loading: loadingSupply, supply} = useFetchCollectionTokensSupply(contractId, collectionId)


    return {
        loading: loadingStats || loadingSupply,
        supply,
        sales: data?.stats?.sales,
        listed: data?.stats?.listed,
        average: data?.stats?.average,
        volume: data?.stats?.volume,
        floar: data?.floar?.[0]?.price
    }
}