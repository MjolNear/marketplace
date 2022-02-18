import {Optional, StringAmount} from "./types";
import {NftMintedInfo} from "../whitelisted.contracts";

export interface BaseNft {
    contractId: string,
    tokenId: string,
    ownerId: string,
    title: string,
    media?: Optional<string>,
    description?: Optional<string>,
    price?: Optional<StringAmount>,
    isApproved: boolean
}

export interface NftMetadata {
    ipfsReference?: Optional<string>,
    copies?: Optional<number>
}

export interface MintInfo {
    mintedInfo: NftMintedInfo
}

export type Nft = BaseNft & NftMetadata & MintInfo