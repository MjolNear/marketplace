import {AccountId, ContractId} from "../../../models/types";
import {fetchWithTimeout} from "../core";
import {ContractStatusResponse} from "../types/response/contracts";


export const contractAPI = {
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

    // /**
    //  * Extracts exported functions from NEAR smart contract
    //  *
    //  * @param contractId NEAR contract
    //  */
    // viewMethods: (contractId: ContractId) => {
    //     if (contractId.endsWith('mintbase1.near')) {
    //         console.log(contractId)
    //         return Promise.resolve(INCORRECT_STANDARD)
    //     }
    //
    //     // https://rpc.ankr.com/near
    //     // https://rpc.mainnet.near.org/
    //     return new JsonRpcProvider('https://rpc.mainnet.near.org/')
    //         .query<ViewCode>({
    //             account_id: contractId,
    //             finality: 'final',
    //             request_type: 'view_code'
    //         })
    //         .then(response => contractAccordance(parseContract(response.code_base64)))
    //         .catch(e => {
    //             console.log(e)
    //             return INCORRECT_STANDARD
    //         })
    // },

    fetchContractBeta: (contractId: ContractId, port = 7010): Promise<ContractStatusResponse> => {
        // const url = `http://localhost:7010/api.mjolnear.com/contracts/${contractId}`
        const url = `https://mjolnear-contracts-indexer.herokuapp.com/api.mjolnear.com/contracts/${contractId}`
        return fetch(url).then(response => response.json())
    }
}