import {mjolViewFunction} from "../rpc";

export const collectionAPI = {
    fetchMarketCollections: (from: number, limit: number) =>
        mjolViewFunction({
            methodName: 'get_market_collections',
            args: {
                from,
                limit,
            }
        }),

    fetchNftsFrom: (collectionId: number, from: number, limit: number) =>
        mjolViewFunction({
            methodName: 'get_nfts_from_collection',
            args: {
                collection_id: collectionId,
                from,
                limit
            }
        })
}