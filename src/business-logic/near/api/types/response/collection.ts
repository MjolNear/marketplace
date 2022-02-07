import {BatchResponse, TokensBatchResponse} from "./core";
import {Token} from "../token";
import {Collection} from "../../../../models/collection";

export type CollectionTokens = TokensBatchResponse<Token>


export interface CollectionsBatchResponse extends BatchResponse {
    collections: Collection[]
}

export const emptyCollectionsBatchResponse: CollectionsBatchResponse = {
    collections: [],
    has_next_batch: false,
    total_count: 0
}