import {CollectionId, ContractId, Optional} from "../../business-logic/models/types";
import {CollectionInfo} from "../../business-logic/models/collection";
import {useEffect, useState} from "react";
import {useFetchCollectionStats} from "./useFetchCollectionStats";
import {useFetchCollectionData} from "./useFetchCollectionData";

interface FetchCollectionHookResult {
    fetching: boolean
    collection?: Optional<CollectionInfo>
    stats: {
        volume?: string,
        sales?: string,
        floar?: string,
        supply?: number
    }
}

export const useFetchCollection = (
    contractId: ContractId,
    collectionId: CollectionId
): FetchCollectionHookResult => {

    const [result, setResult] = useState<FetchCollectionHookResult>({
        fetching: true,
        stats: {}
    })

    const {
        fetching: fetchingStats,
        floar,
        sales,
        volume
    } = useFetchCollectionStats(contractId)

    const {
        fetching: fetchingCollection,
        collection,
        supply
    } = useFetchCollectionData(contractId, collectionId)

    useEffect(() => {
        setResult({
            fetching: fetchingCollection || fetchingStats,
            collection,
            stats: {
                supply,
                floar,
                sales,
                volume
            }
        })
    }, [fetchingCollection, fetchingStats, floar, sales, volume, collection, supply])

    return result
}