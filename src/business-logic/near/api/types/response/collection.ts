import {BatchResponse, TokensBatchResponse} from "./core";
import {NearToken} from "../token";
import {Collection} from "../../../../models/collection";

export type CollectionTokensResponse = TokensBatchResponse<NearToken>


export interface CollectionsBatchResponse extends BatchResponse {
    collections: Collection[]
}

export const emptyCollectionsBatchResponse: CollectionsBatchResponse = {
    collections: [],
    has_next_batch: false,
    total_count: 0
}