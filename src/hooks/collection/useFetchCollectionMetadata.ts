import {Optional} from "../../@types/Aliases";
import {IPFSCollectionMetadata} from "../../@types/Collection";
import {useEffect, useState} from "react";
import {collectionAPI} from "../../near/api/collections";


interface FetchCollectionMetadataHookResult {
    loading: boolean
    metadata?: IPFSCollectionMetadata
}

export const useFetchCollectionMetadata = (reference?: Optional<string>) => {
    const [result, setResult] = useState<FetchCollectionMetadataHookResult>({
        loading: true
    })

    useEffect(() => {
        if (reference) {
            collectionAPI.fetchCollectionMetadata(reference)
                .then(metadata => setResult({loading: false, metadata}))
                .catch(() => setResult({loading: false}))
        } else {
            setResult({loading: false})
        }
    }, [reference])

    return result
}