import {formatPrice} from "../business-logic/near/api/utils";
import {getMintbaseSiteInfo, getNftMintedSiteInfo} from "../business-logic/whitelisted.contracts";
import {MarketToken} from "./generated/graphql";
import {GridToken} from "../business-logic/models/nft";
import {ContractVerificationStatus} from "../business-logic/models/contract";

export const convertToEntity = (token: Omit<MarketToken, "id" | "listingTime">): GridToken => ({
    ...token,
    price: formatPrice(token.price),
    mintedSiteLink: token.mintSiteLink ? token.mintSiteLink : '',
    mintedSiteName: token.mintSiteName ? token.mintSiteName : '',
    verification: ContractVerificationStatus.Verified
})