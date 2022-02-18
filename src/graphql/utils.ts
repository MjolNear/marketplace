import {formatPrice} from "../business-logic/near/api/utils";
import {getMintbaseSiteInfo, getNftMintedSiteInfo} from "../business-logic/whitelisted.contracts";
import {Token} from "./generated/graphql";
import {Nft} from "../business-logic/models/nft";

export const convertToEntity = (token: Omit<Token, "id" | "listingTime">): Nft => ({
    ...token,
    isApproved: true,
    price: formatPrice(token.price),
    mintedInfo: token.contractId.endsWith('mintbase1.near')
        ? getMintbaseSiteInfo(token.contractId, token.ipfsReference?.split('https://arweave.net/')[1])
        : getNftMintedSiteInfo(token, token.contractId)
})