import {useEffect, useState} from "react";
import {Optional} from "../../business-logic/types/aliases";
import {CollectionTraits} from "../../business-logic/types/collection";

export interface FetchCollectionTraitsHookResult {
    loading: boolean
    traits: Optional<CollectionTraits>
}

export const useFetchCollectionTraits = (reference?: Optional<string>) => {
    const [result, setResult] = useState<FetchCollectionTraitsHookResult>({
        loading: true,
        traits: null
    })

    useEffect(() => {
        if (reference) {
            fetch(reference)
                .then(response => response.ok && response.json())
                .then(data => setResult({loading: false, traits: data.traits}))
                .catch(() => setResult({loading: false, traits: null}))
        } else {
            setResult({loading: false, traits: null})
        }
    }, [reference])

    return result
}