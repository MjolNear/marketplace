import {AccountId, CollectionId, ContractId, Optional} from "./Aliases";

export interface BlockchainCollection {
    collection_id: CollectionId
    collection_contract: ContractId
    owner_id: AccountId
    title: string
    desc: string
    media: string
    reference: Optional<string>
}

export type CollectionTraits = Record<string, string[]>

export interface IPFSCollectionMetadata {
    name: string
    image: string
    description: string
    bannerImage?: Optional<string>
    traits?: Optional<CollectionTraits>
    media?: Optional<CollectionMediaLinks>
}

export interface CollectionInfo extends BlockchainCollection {
    metadata?: IPFSCollectionMetadata
}

export interface CollectionMediaLinks {
    website?: Optional<string>
    telegram?: Optional<string>
    twitter?: Optional<string>
    discord?: Optional<string>
}

export interface GridCollection {
    ownerId: AccountId
    collectionId: CollectionId
    title: string,
    description: string
    image: string
}


export interface CreateCollectionMetadataDto {
    title: string
    desc: string
    media: string
    reference: Optional<String>
    custom_collection_id: Optional<String>
}