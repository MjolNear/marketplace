import {formatPrice} from "../business-logic/near/api/utils";
import {getMarketNftVerification, getNftMintedSiteInfo} from "../business-logic/whitelisted.contract";
import {MarketToken, MarketToken_OrderBy, OrderDirection} from "./generated/graphql";
import {GridToken} from "../business-logic/models/nft";

export const convertToMarketToken = (token: Omit<MarketToken, "id" | "listingTimestamp">): GridToken => ({
    ...token,
    price: formatPrice(token.price),
    mintedSiteLink: token.mintSiteLink ? token.mintSiteLink : getNftMintedSiteInfo(token,
        token.contractId).mintedSiteLink,
    mintedSiteName: token.mintSiteName ? token.mintSiteName : getNftMintedSiteInfo(token,
        token.contractId).mintedSiteName,
    verification: getMarketNftVerification(token.contractId)
})


export interface TokenPriceRange {
    from?: string,
    to?: string
}

export interface TokenSortOption {
    by: MarketToken_OrderBy,
    direction: OrderDirection,
    name: TokenSortName
}

export enum TokenSortName {
    PriceLowToHigh = "Price: Low to High",
    PriceHighToLow = "Price: High to Low",
    RecentlyAdded = "Recently added"
}

export const tokenSortOptions: Record<TokenSortName, TokenSortOption> = {
    [TokenSortName.PriceLowToHigh]: {
        by: MarketToken_OrderBy.Price,
        direction: OrderDirection.Asc,
        name: TokenSortName.PriceLowToHigh
    },
    [TokenSortName.PriceHighToLow]: {
        by: MarketToken_OrderBy.Price,
        direction: OrderDirection.Desc,
        name: TokenSortName.PriceHighToLow
    },
    [TokenSortName.RecentlyAdded]: {
        by: MarketToken_OrderBy.ListingTimestamp,
        direction: OrderDirection.Desc,
        name: TokenSortName.RecentlyAdded
    }
}
