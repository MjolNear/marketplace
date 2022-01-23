import {mjolViewFunction} from "../rpc";
import {CollectionTokens} from "../types/response/collection";
import {AccountId, CollectionId} from "../../../models/types";

export const collectionAPI = {

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

    // fetchUserCollections: (accountId: AccountId) =>
    //     mjolViewFunction({
    //         methodName: ''
    //     })



//     pub fn get_collection_info(&self, collection_id: CollectionId) -> Option<CollectionMetadata> {
//     self.collections.get(&collection_id)
// }
//
// pub fn get_collections_by_owner_id(&self, owner_id: AccountId) -> Vec<CollectionId> {
//     self
//     .collections_by_owner_id
//         .get(&owner_id.clone())
// .map(|x| x.to_vec())
// .unwrap_or_else(|| vec![])
// }
}