import {useState, useEffect} from "react";
import {CollectionId, Optional} from "../../business-logic/models/types";

export interface FetchCollectionTraitsHookResult {
    loading: boolean
    traits?: Record<string, string>
}

export const useFetchCollectionTraits = (reference?: Optional<string>) => {
    const [result, setResult] = useState<FetchCollectionTraitsHookResult>({
        loading: true
    })

    useEffect(() => {
        if (reference) {
            fetch(reference)
                .then(response => response.ok && response.json())
                .then((data) => setResult({loading: false, traits: data.traits}))
                .catch(() => setResult({loading: false}))
        }
    }, [reference])

    return result
}