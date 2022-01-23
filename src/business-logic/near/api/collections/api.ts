import {AccountId, ContractId} from "../../../models/types";
import {viewFunction} from "../rpc";

export const collectionAPI = {
    /**
     * Fetches information about user collections.
     *
     * @param accountId User
     */
    fetchUserCollections: ( accountId: AccountId) =>
        viewFunction({
            contractId: "mjol.near",
            methodName: 'get_collections_by_owner_id',
            args: {
                owner_id: accountId
            }
        }),

}