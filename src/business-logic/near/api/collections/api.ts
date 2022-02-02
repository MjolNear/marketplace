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
    fetchUserCollections: (accountId: AccountId): Promise<Collection[]> =>
        mjolViewFunction<Collection[]>({
            methodName: 'get_collections_by_owner_id',
            args: {
                owner_id: accountId
            }
        }).catch(e => {
            console.log(e)
            return []
        }),


    /**
     * Fetches NFTs from collection.
     *
     * @param collectionId valid collection id
     * @param from  start index for fetching
     * @param limit maximum amount of fetched tokens
     */
    fetchNfts: (collectionId: CollectionId, from: number, limit: number): Promise<CollectionTokens> =>
        mjolViewFunction<CollectionTokens>({
            methodName: 'get_nfts_from_collection',
            args: {
                collection_id: collectionId,
                from,
                limit
            }
        }).catch(e => {
            console.log(e)
            return {
                tokens: [],
                total_count: 0,
                has_next_batch: false
            }
        }),

    fetchCollections: (from: number, limit: number): Promise<CollectionBatch> =>
        mjolViewFunction<CollectionBatch>({
                methodName: 'get_collections',
                args: {
                    from,
                    limit,
                }
            }
        ).catch(e => {
            console.log(e)
            return {
                collections: [],
                total_count: 0,
                has_next_batch: false
            }
        })

}