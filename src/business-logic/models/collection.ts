import {AccountId, CollectionId, Optional} from "./types";

export interface Collection {
    collection_id: CollectionId,
    owner_id: AccountId,
    title: string,
    desc: string,
    media: string,
    reference: Optional<string>
}

export type CollectionTraits = Record<string, string[]>

export interface IPFSMetadata {
    "name": string
    "description": string,
    "bannerImage": Optional<string>,
    "traits": CollectionTraits,
    "image": string
}

export interface CollectionInfo extends Collection {
    metadata: IPFSMetadata
}

export interface ExternalLinks {
    website?: string,
    twitter?: string,
    discord?: string,
    instagram?: string
}