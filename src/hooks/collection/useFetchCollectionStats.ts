import {CollectionId, ContractId} from "../../business-logic/types/aliases";
import {useCollectionTotalStatsQuery} from "../../graphql/generated/market-graphql";
import {MJOL_CONTRACT_ID} from "../../near/enviroment/contract-names";
import {useFetchCollectionTokensSupply} from "./useFetchCollectionTokensSupply";

export interface FetchCollectionStatsHookResult {
    loading: boolean,
    supply?: number
    floar?: string
    volume?: string
    sales?: string
}

export const useFetchCollectionStats = (
    contractId: ContractId,
    collectionId: CollectionId
): FetchCollectionStatsHookResult => {

    const _collectionId = contractId === MJOL_CONTRACT_ID ? collectionId : null

    const {loading: loadingStats, data} = useCollectionTotalStatsQuery({
        variables: {
            contractId,
            collectionId: _collectionId,
            _contractId: contractId
        }
    })

    const {loading: loadingSupply, supply} = useFetchCollectionTokensSupply(contractId, collectionId)


    return {
        loading: loadingStats || loadingSupply,
        supply,
        sales: data?.stats?.sales,
        volume: data?.stats?.volume,
        floar: data?.floar?.[0]?.price
    }
}