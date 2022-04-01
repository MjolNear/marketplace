import {AccountId, CollectionId, ContractId, Optional} from "./aliases";

export interface BlockchainCollection {
    collection_id: CollectionId,
    collection_contract: ContractId,
    owner_id: AccountId,
    title: string,
    desc: string,
    media: string,
    reference: Optional<string>
}

export type CollectionTraits = Record<string, string[]>

export interface IPFSCollectionMetadata {
    name: string
    description: string,
    bannerImage: Optional<string>,
    traits: CollectionTraits | null,
    image: string
}

export interface CollectionInfo extends BlockchainCollection {
    metadata?: IPFSCollectionMetadata
}

export interface ExternalLinks {
    website?: string,
    twitter?: string,
    discord?: string,
    instagram?: string
}