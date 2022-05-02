import {CollectionId, ContractId} from "../../@types/Aliases";
import {useCollectionTotalStatsQuery} from "../../graphql/generated/graphql";
import {useFetchCollectionTokensSupply} from "./useFetchCollectionTokensSupply";
import {MJOL_CONTRACT_ID} from "../../near/enviroment/contract-names";

export interface FetchCollectionStatsHookResult {
    loading: boolean
    supply?: number
    floor?: string
    volume?: string
    sales?: string
    listed?: string
    average?: string
    highestSale?: string
}

export const useFetchCollectionStats = (
    contractId: ContractId,
    collectionId: CollectionId
): FetchCollectionStatsHookResult => {

    const id = contractId === MJOL_CONTRACT_ID
        ? `${contractId}-${collectionId}`
        : contractId

    const {loading: loadingStats, data} = useCollectionTotalStatsQuery({
        variables: {
            id
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
        highestSale: data?.stats?.highestSale,
        floor: data?.floor?.marketTokens[0].price
    }
}