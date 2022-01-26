import {AccountId, CollectionId, ContractId} from "../../../models/types";
import {marketViewFunction, mjolViewFunction, viewFunction} from "../rpc";
import {CollectionTokens} from "../types/response/collection";

export const collectionAPI = {
    /**
     * Fetches information about user collections.
     *
     * @param accountId User
     */
    fetchUserCollections: ( accountId: AccountId) =>
        mjolViewFunction({
            methodName: 'get_collections_by_owner_id',
            args: {
                owner_id: accountId
            }
        }),


    /**
     * Fetches NFTs from collection.<br>
     *
     * @param collectionId valid collection id
     * @param from  start index for fetching
     * @param limit maximum amount of fetched tokens
     */
    fetchNfts: (collectionId: CollectionId, from: number, limit: number) =>
        mjolViewFunction<CollectionTokens>({
            methodName: 'get_nfts_from_collection',
            args: {
                collection_id: collectionId,
                from,
                limit
            }
        }),

}