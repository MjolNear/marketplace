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

export type Nft = BaseNft & NftMetadata & MintInfo