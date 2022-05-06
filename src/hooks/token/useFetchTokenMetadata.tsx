import {Optional} from "../../@types/Aliases";
import {useEffect, useState} from "react";

interface TokenMetadataHookResult {
    loading: boolean
    title?: Optional<string>
    description?: Optional<string>
    attributes?: Optional<{ trait_type: string, value: string }[]>
}

export const useFetchTokenMetadata = (
    reference?: Optional<string>
) => {
    const [result, setResult] = useState<TokenMetadataHookResult>({loading: true})

    useEffect(() => {
        if (reference) {
            fetch(reference)
                .then(r => r.json())
                .then(meta => {
                    if ("attributes" in meta) {
                        setResult({loading: false, ...meta})
                    } else if ("extra" in meta) {
                        setResult({loading: false, ...meta})
                    } else {
                        setResult({loading: false})
                    }
                })
                .catch(() => setResult({loading: false}))
        } else {
            setResult({loading: false})
        }
    }, [reference])

    return result
}