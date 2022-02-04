import {AccountId, ContractId} from "../../../models/types";
import {QueryResponseKind} from "near-api-js/lib/providers/provider";
import {JsonRpcProvider} from "near-api-js/lib/providers";
import {contractAccordance, INCORRECT_STANDARD} from "./parser/methods";
import {parseContract} from "./parser/lib";
import {fetchWithTimeout} from "../core";
import {ContractInfo} from "../../../models/contract";
import {batchRequest} from "../batch-request";


interface ViewCode extends QueryResponseKind {
    code_base64: string
}


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

    /**
     * Extracts exported functions from NEAR smart contract
     *
     * @param contractId NEAR contract
     */
    viewMethods: (contractId: ContractId) => {
        if (contractId.endsWith('mintbase1.near')) {
            console.log(contractId)
            return Promise.resolve(INCORRECT_STANDARD)
        }

        // https://rpc.ankr.com/near
        // https://rpc.mainnet.near.org/
        return new JsonRpcProvider('https://rpc.mainnet.near.org/')
            .query<ViewCode>({
                account_id: contractId,
                finality: 'final',
                request_type: 'view_code'
            })
            .then(response => contractAccordance(parseContract(response.code_base64)))
            .catch(e => {
                console.log(e)
                return INCORRECT_STANDARD
            })
    },

    fetchUserTokenContractsInfo: (accountId: AccountId) =>
        contractAPI
            .fetchUserTokenContracts(accountId)
            .then(contractAPI.fetchContractsInfo),

    fetchContractsInfo: (contracts: ContractId[]): Promise<ContractInfo[]> =>
        batchRequest(contracts, contractAPI.viewMethods)
            .then(result => result.values.map((accordance, i) => ({
                contractId: contracts[i],
                accordance
            })))
}