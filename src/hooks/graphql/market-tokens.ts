import {convertToMarketToken, TokenPriceRange, TokenSortOption} from "../../graphql/utils";
import {useGenericListDataQuery} from "./useGenericListDataQuery";
import {
    AccountMarketTokensQuery,
    AccountMarketTokensQueryVariables,
    CollectionMarketTokensQuery,
    CollectionMarketTokensQueryVariables,
    MarketTokensQuery,
    MarketTokensQueryVariables,
    MarketTokensSearchQuery,
    MarketTokensSearchQueryVariables,
    useAccountMarketTokensQuery,
    useCollectionMarketTokensQuery,
    useMarketTokensQuery,
    useMarketTokensSearchQuery,
} from "../../graphql/generated/market-graphql";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../utils/string";
import {GridToken} from "../../business-logic/types/nft";

export type MarketTokens = MarketTokensQuery['marketTokens']

const marketTokensResponseMapper = (data?: {
    marketTokens: MarketTokens
}) => data?.marketTokens.map(convertToMarketToken) || []

const profileMarketTokensResponseMapper = (
    data?: AccountMarketTokensQuery | undefined
) => data?.account?.marketTokens.map(convertToMarketToken) || []


export const useMarketTokens = (
    limit: number,
    sort: TokenSortOption,
    priceRange: TokenPriceRange
) => {
    return useGenericListDataQuery<GridToken, MarketTokensQuery, MarketTokensQueryVariables>(
        useMarketTokensQuery, marketTokensResponseMapper, {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                limit,
                offset: 0,
                orderBy: sort.by,
                orderDirection: sort.direction,
                priceFrom: priceRange.from || MIN_ITEM_YOCTO_PRICE,
                priceTo: priceRange.to || MAX_ITEM_YOCTO_PRICE
            }
        }
    )
}

export const useCollectionMarketTokens = (
    limit: number,
    sort: TokenSortOption,
    priceRange: TokenPriceRange,
    contractId: string,
    collectionId: string
) => {
    return useGenericListDataQuery<GridToken, CollectionMarketTokensQuery, CollectionMarketTokensQueryVariables>(
        useCollectionMarketTokensQuery, marketTokensResponseMapper, {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                id: `${contractId}-${collectionId}`,
                limit,
                offset: 0,
                orderBy: sort.by,
                orderDirection: sort.direction,
                priceFrom: priceRange.from || MIN_ITEM_YOCTO_PRICE,
                priceTo: priceRange.to || MAX_ITEM_YOCTO_PRICE
            }
        },
    )
}

export const useMarketTokensTextSearching = (
    text: string,
    limit: number
) => {
    return useGenericListDataQuery<GridToken, MarketTokensSearchQuery, MarketTokensSearchQueryVariables>(
        useMarketTokensSearchQuery, marketTokensResponseMapper, {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                limit,
                text,
                offset: 0
            }
        }
    )
}


export const useAccountMarketTokens = (
    accountId: string,
    limit: number,
    sort: TokenSortOption,
    priceRange: TokenPriceRange
) => {
    return useGenericListDataQuery<GridToken, AccountMarketTokensQuery, AccountMarketTokensQueryVariables>(
        useAccountMarketTokensQuery, profileMarketTokensResponseMapper, {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                accountId,
                limit,
                offset: 0,
                orderBy: sort.by,
                orderDirection: sort.direction,
                priceFrom: priceRange.from || MIN_ITEM_YOCTO_PRICE,
                priceTo: priceRange.to || MAX_ITEM_YOCTO_PRICE
            }
        }
    )
}

