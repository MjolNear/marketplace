import {AccountId, ContractId, TokenId} from "../../../business-logic/types/aliases";
import {fetchWithTimeout} from "../core";
import {ContractStatusResponseCode, TContractResponse} from "../types/response/contracts";
import {viewFunction} from "../../enviroment/rpc";
import {ContractMetadata} from "../types/contract";


export const contractAPI = {

    contractMetadata: (contractId: ContractId): Promise<ContractMetadata> => {
        return viewFunction<ContractMetadata>({
            contractId,
            methodName: "nft_metadata",
            args: {}
        })
    },
    /**
     * Fetches all NFT stores (contracts) for given users.
     *
     * @param accountId NEAR valid account
     */
    fetchUserTokenContracts: (accountId: AccountId): Promise<ContractId[]> =>
        fetchWithTimeout(
            `https://helper.mainnet.near.org/account/${accountId}/likelyNFts`,
            {timeout: 8000}
        ).then(response => response.json()
        ).catch(() => []),

    fetchContract: (contractId: ContractId): Promise<TContractResponse | undefined> => {
        // const url = `http://localhost:7010/api.mjolnear.com/contracts/${contractId}`
        const url = `https://mjolnear-contracts-indexer.herokuapp.com/api.mjolnear.com/contracts/${contractId}`
        return fetch(url)
            .then(response => response.json())
            .then(contractResponse => contractResponse.status === ContractStatusResponseCode.SUCCESS
                ? contractResponse.data
                : undefined
            )
            .catch(() => undefined)
    },

    removeExpiredContract: (contractId: ContractId, tokenId: TokenId) => {
        const url = "https://mjolnear-contracts-indexer.herokuapp.com/api.mjolnear.com/remover/remove"
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({contractId, tokenId}),
        }).then(response => response.json())
    }
}