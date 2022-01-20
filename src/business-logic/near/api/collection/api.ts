import {mjolViewFunction} from "../rpc";

export const collectionAPI = {


    // get_nfts_from_collection(&self, collection_id: CollectionId,
    // limit: u64, from: u64) -> CollectionData

    fetchNfts: (collectionId: number, from: number, limit: number) =>
        mjolViewFunction({
            methodName: 'get_nfts_from_collection',
            args: {
                collection_id: collectionId,
                from,
                limit
            }
        })
}