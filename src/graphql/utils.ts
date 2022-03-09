import {formatPrice} from "../business-logic/near/api/utils";
import {getMarketNftVerification} from "../business-logic/whitelisted.contract";
import {MarketToken} from "./generated/graphql";
import {GridToken} from "../business-logic/models/nft";

export const convertToMarketToken = (token: Omit<MarketToken, "id" | "listingTimestamp">): GridToken => ({
    ...token,
    price: formatPrice(token.price),
    mintedSiteLink: token.mintSiteLink ? token.mintSiteLink : '',
    mintedSiteName: token.mintSiteName ? token.mintSiteName : '',
    verification: getMarketNftVerification(token.contractId)
})