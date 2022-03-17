// string alias for NEAR account
export type AccountId = string

// string alias for NEAR contract
export type ContractId = string

// string alias for token
export type TokenId = string

// string alias for collection
export type CollectionId = string

// string alias for NEAR amount
export type StringAmount = string

// number alias for NEAR amount
export type NumberAmount = number

// string alias for Token UID
export type TokenUID = string

export type TPayouts = Record<string, number>

// wrapper value to optional
export type Optional<T> = T | null