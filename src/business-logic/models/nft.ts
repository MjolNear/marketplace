export class NftCollection {
    collection: string

    constructor(collection: string = "") {
        this.collection = collection
    }
}

export class MintSite {
    name: string
    nftLink: string

    constructor(name: string = "", nftLink: string = "") {
        this.name = name
        this.nftLink = nftLink
    }
}

export interface BaseNft {
    contractId: string,
    tokenId: string,
    ownerId: string,
    title: string,
    mediaURL: string,
    description?: string,
    price: string | null
}

export interface NftMetadata {
    referenceURL: string | null,
    copies: number | null
}

export interface MintInfo {
    mintSite?: {
        name: string,
        nftLink: string
    }
}

export interface TokenMetadata {
    // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"
    title?: string,
    // free-form description
    description?: string,
    // URL to associated media, preferably to decentralized, content-addressed storage
    media?: string,
    // Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.
    media_hash?: string,
    // number of copies of this set of metadata in existence when token was minted.
    copies?: string,
    // When token was issued or minted, Unix epoch in milliseconds
    issued_at?: string,
    // When token expires, Unix epoch in milliseconds
    expires_at?: string,
    // When token starts being valid, Unix epoch in milliseconds
    starts_at?: string,
    // When token was last updated, Unix epoch in milliseconds
    updated_at?: string,
    // anything extra the NFT wants to store on-chain. Can be stringified JSON.
    extra?: string,
    // URL to an off-chain JSON file with more info.
    reference?: string,
    // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
    reference_hash?: string
}

export interface Nft extends BaseNft, NftMetadata, MintInfo {
}