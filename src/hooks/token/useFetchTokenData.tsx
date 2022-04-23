import {ContractId, TokenId, TokenPayouts} from "../../@types/Aliases";
import {useEffect, useState} from "react";
import {ApprovedToken} from "../../@types/Token";
import {marketAPI} from "../../near/api/market";
import {TContractResponse} from "../../near/api/types/response/contracts";
import {contractAPI} from "../../near/api/contracts";
import {nftAPI} from "../../near/api/nfts";
import {getNftPayouts} from "../../near/api/nfts/get-user-nfts";

export interface FetchTokenHookResult {
    fetching: boolean
    token?: ApprovedToken
    contract?: TContractResponse
    payouts?: TokenPayouts
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