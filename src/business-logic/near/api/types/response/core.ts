export interface BatchResponse {
    has_next_batch: boolean,
    total_count: number
}

export interface TokensResponse<T> extends BatchResponse {
    tokens: T[]
}
