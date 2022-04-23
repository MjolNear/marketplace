import {BatchResponse, TokensBatchResponse} from "./core";
import {NearToken} from "../token";
import {BlockchainCollection} from "../../../../@types/Collection";

export type CollectionTokensResponse = TokensBatchResponse<NearToken>


export interface CollectionsBatchResponse extends BatchResponse {
    collections: BlockchainCollection[]
}

export const emptyCollectionsBatchResponse: CollectionsBatchResponse = {
    collections: [],
    has_next_batch: false,
    total_count: 0
}