import {Token} from "../token";

export interface BatchResponse {
    has_next_batch: boolean,
    total_count: number
}

export interface TokensBatchResponse<T> extends BatchResponse {
    tokens: T[]
}

export const emptyTokensBatchResponse: TokensBatchResponse<Token> = {
    tokens: [],
    has_next_batch: false,
    total_count: 0
}