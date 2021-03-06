import {AccountId, CollectionId, ContractId, Optional} from "../../../@types/Aliases";
import {
    CollectionsBatchResponse,
    CollectionTokensResponse,
    emptyCollectionsBatchResponse,
} from "../types/response/collection";
import {BlockchainCollection, CollectionInfo, IPFSCollectionMetadata} from "../../../@types/Collection";
import {fetchWithTimeout} from "../core";
import {NearToken} from "../types/token";
import {MJOL_CONTRACT_ID} from "../../enviroment/contract-names";
import {emptyTokensBatchResponse} from "../types/response/core";
import {batchRequest} from "../batch-request";
import {nftAPI} from "../nfts";
import {mjolViewFunction, viewFunction} from "../../enviroment/rpc";
import {DODIK_GET_LIST, DODIK_INDEX_LIST} from "../../../ipfs/whitelisted.contract";

export const collectionAPI = {

    /**
     * Fetches information about user collections.
     *
     * @param accountId User
     */
    fetchUserCollections: (accountId: AccountId): Promise<BlockchainCollection[]> =>
        mjolViewFunction<BlockchainCollection[]>({
            methodName: 'get_collections_by_owner_id',
            args: {
                owner_id: accountId
            }
        }).catch(e => {
            console.log(e)
            return []
        }),

    fetchTotalSupply: (collectionId: CollectionId, contractId: ContractId) => {
        if (contractId === MJOL_CONTRACT_ID) {
            return mjolViewFunction<number>({
                methodName: 'nft_collection_supply',
                args: {
                    collection_id: collectionId
                }
            }).catch(e => {
                console.log(e)
                return Number(0)
            })
        } else {
            return viewFunction<string>({
                    contractId,
                    methodName: 'nft_total_supply',
                    args: {}
                }
            ).then(stringTotal => Number(stringTotal)
            ).catch(e => {
                console.log(e)
                return Number(0)
            })
        }
    },

    fetchNfts: (
        collectionId: CollectionId,
        contractId: ContractId,
        from: number,
        limit: number,
        totalSupply: number = 0
    ): Promise<CollectionTokensResponse> => {
        if (contractId === MJOL_CONTRACT_ID) {
            return collectionAPI.fetchMjolNfts(collectionId, from, limit)
        } else {
            return collectionAPI.fetchWhitelistedCollectionNfts(contractId, from, limit)
                .then(tokens => ({
                    tokens,
                    has_next_batch: from < totalSupply,
                    total_count: totalSupply
                }))
                .catch(e => {
                    console.log(e)
                    return emptyTokensBatchResponse
                })
        }
    },

    fetchWhitelistedCollectionNfts: (contractId: ContractId, from: number, limit: number): Promise<NearToken[]> => {
        if (DODIK_GET_LIST.has(contractId)) {
            let indices = [];
            let diff = DODIK_INDEX_LIST.get(contractId) || 0;
            for (let i = diff; i < limit + diff; i++) {
                indices.push(from + i)
            }
            return batchRequest(indices, i => nftAPI.fetchNft(contractId, i.toString()))
                .then(result => result.values.filter(nft => !!nft))
        }
        return viewFunction({
            contractId,
            methodName: "nft_tokens",
            args: {
                from_index: from.toString(),
                limit
            }
        })
    },

    /**
     * Fetches NFTs from collection stored on MjolNear contract.
     *
     * @param collectionId valid collection id
     * @param from  start index for fetching
     * @param limit maximum amount of fetched tokens
     */
    fetchMjolNfts: (collectionId: CollectionId, from: number, limit: number): Promise<CollectionTokensResponse> =>
        mjolViewFunction<CollectionTokensResponse>({
            methodName: 'get_nfts_from_collection',
            args: {
                collection_id: collectionId,
                from,
                limit
            }
        }).catch(e => {
            console.log(e)
            return emptyTokensBatchResponse
        }),

    fetchCollection: (collectionId: CollectionId): Promise<Optional<BlockchainCollection>> =>
        mjolViewFunction<Optional<BlockchainCollection>>({
            methodName: 'get_collection_info',
            args: {
                collection_id: collectionId
            }
        }).catch(e => {
            console.log(e)
            return null
        }),

    fetchCollectionMetadata: (ipfsLink: string): Promise<IPFSCollectionMetadata> =>
        fetchWithTimeout(
            ipfsLink,
            {timeout: 8000}
        ).then(response => response.json()
        ).catch(e => {
            console.log(e)
        }),

    // deprecated
    fetchCollectionInfo: (collectionId: CollectionId): Promise<Optional<CollectionInfo>> =>
        collectionAPI.fetchCollection(collectionId)
            .then(collection => {
                    if (collection === null || collection.reference === null) {
                        return collection
                    }
                    return collectionAPI.fetchCollectionMetadata(collection.reference)
                        .then(metadata => ({...collection, metadata}))
                        .catch((e) => {
                            console.log(e)
                            return collection
                        })
                }
            ).catch(e => {
                console.log(e)
                return null
        }),

    // deprecated
    fetchCollections: (from: number, limit: number): Promise<CollectionsBatchResponse> =>
        mjolViewFunction<CollectionsBatchResponse>({
                methodName: 'get_collections',
                args: {
                    from,
                    limit,
                    include_empty: false
                }
            }
        ).catch(e => {
                console.log(e)
                return emptyCollectionsBatchResponse
            }
        )
}