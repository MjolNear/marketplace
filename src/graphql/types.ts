import {formatPrice} from "../near/api/utils";
import {getMarketNftVerification, getNftMintedSiteInfo} from "../business-logic/whitelisted.contract";
import {
    Activity_OrderBy,
    ActivityEventType,
    MarketToken,
    MarketToken_OrderBy,
    OrderDirection
} from "./generated/market-graphql";
import {GridToken} from "../business-logic/types/nft";
import BuyIcon from "../components/Icons/Activity/BuyIcon";
import React from "react";

export const convertToMarketToken = (
    token: Omit<MarketToken, 'id' | 'listingTimestamp' | 'owner'>
): GridToken => ({
    ...token,
    price: formatPrice(token.price),
    verification: getMarketNftVerification(token.contractId),

    mintedSiteLink: token.mintSiteLink
        ? token.mintSiteLink
        : getNftMintedSiteInfo(token, token.contractId).mintedSiteLink,

    mintedSiteName: token.mintSiteName
        ? token.mintSiteName
        : getNftMintedSiteInfo(token, token.contractId).mintedSiteName
})


export interface TokenPriceRange {
    from?: string,
    to?: string
}

interface SortOption<Value, Name> {
    by: Value
    direction: OrderDirection
    name: Name
}

type SortOptions<Value, Name extends string> = Record<string, SortOption<Value, Name>>

export enum TokenSortName {
    PriceLowToHigh = "Price: Low to High",
    PriceHighToLow = "Price: High to Low",
    RecentlyAdded = "Recently added"
}

export type TokenSortOption = SortOption<MarketToken_OrderBy, TokenSortName>

export const tokenSortOptions: SortOptions<MarketToken_OrderBy, TokenSortName> = {
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


export enum ActivitySortName {
    PriceLowToHigh = "Price: Low to High",
    PriceHighToLow = "Price: High to Low",
    RecentlyAdded = "Newest first",
    LastFirst = "Oldest first"
}

export type ActivitySortOption = SortOption<Activity_OrderBy, ActivitySortName>

export const activitySortOptions: SortOptions<Activity_OrderBy, ActivitySortName> = {
    [ActivitySortName.PriceLowToHigh]: {
        by: Activity_OrderBy.Price,
        direction: OrderDirection.Asc,
        name: ActivitySortName.PriceLowToHigh
    },
    [ActivitySortName.PriceHighToLow]: {
        by: Activity_OrderBy.Price,
        direction: OrderDirection.Desc,
        name: ActivitySortName.PriceHighToLow
    },
    [ActivitySortName.RecentlyAdded]: {
        by: Activity_OrderBy.Timestamp,
        direction: OrderDirection.Desc,
        name: ActivitySortName.RecentlyAdded
    },
    [ActivitySortName.LastFirst]: {
        by: Activity_OrderBy.Timestamp,
        direction: OrderDirection.Asc,
        name: ActivitySortName.LastFirst
    }
}

export const activityEvents: ActivityEventType[] = [
    ActivityEventType.Buy,
    ActivityEventType.List,
    ActivityEventType.Unlist,
    ActivityEventType.Transferred
]