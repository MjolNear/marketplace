import {ContractId, TokenId, TPayouts} from "../business-logic/models/types";
import {useEffect, useState} from "react";
import {ApprovedToken} from "../business-logic/models/nft";
import {marketAPI} from "../business-logic/near/api/market";
import {TContractResponse} from "../business-logic/near/api/types/response/contracts";
import {contractAPI} from "../business-logic/near/api/contracts";
import {nftAPI} from "../business-logic/near/api/nfts";
import {getNftPayouts} from "../business-logic/near/api/nfts/get-user-nfts";

export interface FetchTokenHookResult {
    fetching: boolean
    token?: ApprovedToken
    contract?: TContractResponse
    payouts?: TPayouts
}

export const useFetchTokenData = (
    contractId: ContractId,
    tokenId: TokenId
) => {

    const [result, setResult] = useState<FetchTokenHookResult>({fetching: true})

    useEffect(() => {
        Promise.all(
            [
                nftAPI.fetchStandardizedNft(contractId, tokenId),
                marketAPI.fetchTokenPrice(contractId, tokenId),
                contractAPI.fetchContract(contractId),
                getNftPayouts(contractId, tokenId)
            ]
        ).then(response => {
                const [token, price, contract, payouts] = response
                setResult({
                    fetching: false,
                    token: {...token, price},
                    contract,
                    payouts
                })
            }
        ).catch(() => setResult({
            fetching: false
        }))
    }, [contractId, tokenId])

    return result
}