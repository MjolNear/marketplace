import {CollectionId, ContractId, Optional} from "../../business-logic/types/aliases";
import {CollectionInfo} from "../../business-logic/types/collection";
import {useEffect, useState} from "react";
import {collectionAPI} from "../../near/api/collections";

export interface FetchCollectionDataHookResult {
    fetching: boolean
    collection?: Optional<CollectionInfo>
    supply?: number
}

export const useFetchCollectionData = (contractId?: ContractId, collectionId?: CollectionId) => {
    const [result, setResult] = useState<FetchCollectionDataHookResult>({
        fetching: true,
    })
    useEffect(() => {
        if (contractId && collectionId) {
            Promise.all([
                    collectionAPI.fetchCollection(collectionId),
                    collectionAPI.fetchTotalSupply(collectionId, contractId)
                ]
            ).then(response => {
                const [collection, supply] = response
                setResult({fetching: false, collection, supply})
            }).catch(() => {
                setResult({fetching: false})
            })
        } else {
            setResult({fetching: false})
        }
    }, [contractId, collectionId])

    return result
}