import {BatchResponse, TokensResponse} from "./core";
import {Token} from "../token";
import {Collection} from "../../../../models/collection";

export type CollectionTokens = TokensResponse<Token>

export interface CollectionBatch extends BatchResponse {
    collections: Collection[]
}