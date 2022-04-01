import {AccountId} from "../../business-logic/types/aliases";
import {useState, useEffect} from "react";
import {collectionAPI} from "../../business-logic/near/api/collections";
import {BlockchainCollection} from "../../business-logic/models/collection";

export interface UserCollectionsHookResult {
    loading: boolean,
    collections: BlockchainCollection[]
}

export const useFetchUserCollections = (accountId: AccountId) => {
    const [result, setResult] = useState<UserCollectionsHookResult>({
        loading: true,
        collections: []
    })

    useEffect(() => {
        collectionAPI.fetchUserCollections(accountId)
            .then(collections => setResult({loading: false, collections}))
            .catch(() => setResult({loading: false, collections: []}))
    }, [accountId])

    return result
}