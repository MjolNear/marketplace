import {ContractId, TPayouts, TokenId} from "../../business-logic/types/aliases";
import {getNftPayouts} from "../../business-logic/near/api/nfts/get-user-nfts";
import {useEffect, useState} from "react";

export interface TokenPayoutsHookResult {
    fetching: boolean
    payouts?: TPayouts
}

export const useTokenPayouts = (
    contractId: ContractId,
    tokenId: TokenId
) => {

    const [result, setResult] = useState<TokenPayoutsHookResult>({
        fetching: true
    })

    useEffect(() => {
        getNftPayouts(contractId, tokenId)
            .then(payouts => setResult({fetching: false, payouts}))
            .catch(() => setResult({fetching: false}))
    }, [contractId, tokenId])

    return result
}