import {Optional} from "./aliases";

export interface TokenTraitInput {
    attribute: string
    value: string
}

export interface SingleValueInput {
    value: string
}

export interface CollectionTraitInput {
    attribute: string
    values: SingleValueInput[]
}

export interface ImageInput {
    file?: File
    url: string
}

export interface CollectionMediaLinksInput {
    twitter?: Optional<string>
    telegram?: Optional<string>
    discord?: Optional<string>
    website?: Optional<string>
}

export interface TokenRoyaltyInput {
    account: string
    percent: number
}

export interface TokenFormFields {
    title: string
    description: string
    copies: number
    media: ImageInput
    collection: Optional<{ id: string, name: string, reference: Optional<string> }>
    royalty: TokenRoyaltyInput
    traits: TokenTraitInput[]
}

export interface CollectionFormFields {
    title: string
    description: string
    media: ImageInput
    banner: ImageInput
    collectionId?: string
    links: CollectionMediaLinksInput
    traits: CollectionTraitInput[]
}

export const NEAR_ACCOUNT_REGEX = /^(([a-z\d]+[\-_])*[a-z\d]+\.)*([a-z\d]+[\-_])*[a-z\d]+.near$|^[a-zA-Z\d]{64}$/
export const COLLECTION_ID_REGEX = /^[a-z\-\d]+$/