import {CollectionId, ContractId} from "../../business-logic/types/aliases";
import {useEffect, useState} from "react";
import {collectionAPI} from "../../near/api/collections";

interface FetchCollectionTokensSupplyHookResult {
    loading: boolean
    supply?: number
}

export const useFetchCollectionTokensSupply = (
    contractId?: ContractId,
    collectionId?: CollectionId
) => {
    const [result, setResult] = useState<FetchCollectionTokensSupplyHookResult>({
        loading: true
    })

    useEffect(() => {
        if (contractId && collectionId) {
            setResult({loading: true})
            collectionAPI.fetchTotalSupply(collectionId, contractId)
                .then(supply => setResult({loading: false, supply}))
                .catch(() => setResult({loading: false}))
        } else {
            setResult({loading: false})
        }
    }, [contractId, collectionId])

    return result
}