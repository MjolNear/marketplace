import {ContractId, Optional, StringAmount, TokenId} from "../../business-logic/types/aliases";
import {useEffect, useState} from "react";
import {marketAPI} from "../../business-logic/near/api/market";

export interface TokenPriceHookResult {
    price: Optional<StringAmount>
    fetching: boolean
}

export const useTokenPrice = (
    contractId: ContractId,
    tokenId: TokenId
) => {

    const [result, setResult] = useState<TokenPriceHookResult>({
        price: null,
        fetching: true
    })

    useEffect(() => {
        marketAPI.fetchTokenPrice(contractId, tokenId)
            .then(price => setResult({fetching: false, price}))
            .catch(() => setResult({fetching: false, price: null}))
    }, [contractId, tokenId])

    return result
}