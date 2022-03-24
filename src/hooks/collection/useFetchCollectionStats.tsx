import {ContractId} from "../../business-logic/models/types";
import {useCollectionTotalStatsQuery} from "../../graphql/generated/graphql";
import {MJOL_CONTRACT_ID} from "../../business-logic/near/enviroment/contract-names";

export interface FetchCollectionStatsHookResult {
    fetching: boolean,
    floar?: string
    volume?: string
    sales?: string
}


export const useFetchCollectionStats = (
    contractId: ContractId
): FetchCollectionStatsHookResult => {

    const {loading: fetching, data} = useCollectionTotalStatsQuery({
        variables: {
            contractId,
            _contractId: contractId
        }
    })

    return contractId === MJOL_CONTRACT_ID
        ? {fetching}
        : {
            fetching,
            sales: data?.stats?.sales,
            volume: data?.stats?.volume,
            floar: data?.floar?.[0]?.price
        }
}