import {AccountId, CollectionId} from "../../../models/types";
import {mjolViewFunction} from "../rpc";
import {CollectionBatch, CollectionTokens} from "../types/response/collection";
import {Collection} from "../../../models/collection";

export const collectionAPI = {
    /**
     * Fetches information about user collections.
     *
     * @param accountId User
     */
    fetchUserCollections: (accountId: AccountId) =>
        mjolViewFunction<Collection[]>({
            methodName: 'get_collections_by_owner_id',
            args: {
                owner_id: accountId
            }
        }),


    /**
     * Fetches NFTs from collection.
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

    fetchCollections: (from: number, limit: number) =>
        mjolViewFunction<CollectionBatch>({
                methodName: 'get_collections',
                args: {
                    from,
                    limit,
                }
            }
        )

}