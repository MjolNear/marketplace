import {ContractId, Optional, StringAmount, TokenId} from "../business-logic/models/types";
import {useEffect, useState} from "react";
import {marketAPI} from "../business-logic/near/api/market";

export const useTokenPrice = (
    contractId: ContractId | undefined,
    tokenId: TokenId | undefined
) => {
    const [price, setPrice] = useState<Optional<StringAmount>>(null)

    useEffect(() => {
        contractId && tokenId && marketAPI.fetchTokenPrice(contractId, tokenId)
            .then(setPrice)
    }, [contractId, tokenId])

    return price
}