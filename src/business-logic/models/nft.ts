import {Token} from "../near/api/types/token";
import {MJOL_CONTRACT_ID} from "../near/enviroment/contract-names";
import {Optional, StringAmount} from "./types";
import {marketAPI} from "../near/api/market";

export interface BaseNft {
    contractId: string,
    tokenId: string,
    ownerId: string,
    title: string,
    mediaURL: string,
    description: Optional<string>,
    price: Optional<StringAmount>
}

export interface NftMetadata {
    referenceURL: Optional<string>,
    copies: Optional<number>
}

export interface MintInfo {
    mintSite?: {
        name: string,
        nftLink: string
    }
}

export type Nft = BaseNft & NftMetadata & MintInfo



export async function mapMjolTokenToNFT (token: Token): Promise<Nft> {
    return {
        contractId: MJOL_CONTRACT_ID,
        tokenId: token.token_id,
        ownerId: token.owner_id,
        title: token.metadata.title || "",
        mediaURL: token.metadata.media || "",
        description: token.metadata.description,
        price: await marketAPI.fetchTokenPrice(MJOL_CONTRACT_ID, token.token_id),
        referenceURL: token.metadata.reference,
        copies: token.metadata.copies,
    }
}