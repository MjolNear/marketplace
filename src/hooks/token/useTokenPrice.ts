import {ContractId, Optional, StringPrice, TokenId} from "../../@types/Aliases";
import {useEffect, useState} from "react";
import {marketAPI} from "../../near/api/market";

export interface TokenPriceHookResult {
    price: Optional<StringPrice>
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