import {AccountId, CollectionId, Optional} from "../../../models/types";
import {mjolViewFunction} from "../rpc";
import {CollectionBatch, CollectionTokens} from "../types/response/collection";
import {Collection, CollectionInfo, IPFSMetadata} from "../../../models/collection";
import {fetchWithTimeout} from "../core";

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

    fetchCollection: (collectionId: CollectionId): Promise<Optional<Collection>> =>
        mjolViewFunction<Optional<Collection>>({
            methodName: 'get_collection_info',
            args: {
                collection_id: collectionId
            }
        }).catch(e => {
            console.log(e)
            return null
        }),

    fetchCollectionMetadata: (ipfsLink: string): Promise<IPFSMetadata> =>
        fetchWithTimeout(
            ipfsLink,
            {timeout: 8000}
        ).then(response => response.json()
        ).catch(() => []),


    fetchCollectionInfo: (collectionId: CollectionId): Promise<Optional<CollectionInfo>> =>
        collectionAPI.fetchCollection(collectionId)
            .then(collection => {
                    if (collection === null || collection.reference === null) {
                        return null
                    }
                    return collectionAPI.fetchCollectionMetadata(collection.reference)
                        .then(metadata => ({
                            owner_id: collection.owner_id,
                            collection_id: collection.collection_id,
                            title: collection.title,
                            desc: collection.desc,
                            media: collection.media,
                            reference: collection.reference,
                            metadata: metadata
                        }))
                        .catch((e) => {
                            console.log(e)
                            return null
                        })
                }
            ).catch(e => {
            console.log(e)
            return null
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