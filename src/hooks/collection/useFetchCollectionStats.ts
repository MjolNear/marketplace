import {CollectionId, ContractId} from "../../business-logic/types/aliases";
import {useCollectionTotalStatsQuery} from "../../graphql/generated/market-graphql";
import {MJOL_CONTRACT_ID} from "../../business-logic/near/enviroment/contract-names";

export interface FetchCollectionStatsHookResult {
    fetching: boolean,
    floar?: string
    volume?: string
    sales?: string
}


export const useFetchCollectionStats = (
    contractId: ContractId,
    collectionId: CollectionId
): FetchCollectionStatsHookResult => {

    const _collectionId = contractId === MJOL_CONTRACT_ID ? collectionId : null

    const {loading: fetching, data} = useCollectionTotalStatsQuery({
        variables: {
            contractId,
            collectionId: _collectionId,
            _contractId: contractId
        }
    })

    return {
        fetching,
        sales: data?.stats?.sales,
        volume: data?.stats?.volume,
        floar: data?.floar?.[0]?.price
    }
}