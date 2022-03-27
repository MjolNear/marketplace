import {convertToMarketToken, TokenPriceRange, TokenSortOption} from "../../graphql/utils";
import {useGenericMarketTokensQuery} from "./useGenericMarketTokensQuery";
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
} from "../../graphql/generated/graphql";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../utils/string";
import {MJOL_CONTRACT_ID} from "../../business-logic/near/enviroment/contract-names";

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
    return useGenericMarketTokensQuery<MarketTokensQuery, MarketTokensQueryVariables>(
        useMarketTokensQuery, {
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
        },
        marketTokensResponseMapper
    )
}

export const useCollectionMarketTokens = (
    limit: number,
    sort: TokenSortOption,
    priceRange: TokenPriceRange,
    collectionContract?: string,
    collectionId?: string
) => {
    return useGenericMarketTokensQuery<CollectionMarketTokensQuery, CollectionMarketTokensQueryVariables>(
        useCollectionMarketTokensQuery, {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                contractId: collectionContract || "",
                collectionId: collectionContract === MJOL_CONTRACT_ID ? collectionId : null,
                limit,
                offset: 0,
                orderBy: sort.by,
                orderDirection: sort.direction,
                priceFrom: priceRange.from || MIN_ITEM_YOCTO_PRICE,
                priceTo: priceRange.to || MAX_ITEM_YOCTO_PRICE
            }
        },
        marketTokensResponseMapper
    )
}

export const useMarketTokensTextSearching = (
    text: string,
    limit: number
) => {
    return useGenericMarketTokensQuery<MarketTokensSearchQuery, MarketTokensSearchQueryVariables>(
        useMarketTokensSearchQuery, {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                limit,
                text,
                offset: 0
            }
        },
        marketTokensResponseMapper
    )
}


export const useAccountMarketTokens = (
    accountId: string,
    limit: number,
    sort: TokenSortOption,
    priceRange: TokenPriceRange
) => {
    return useGenericMarketTokensQuery<AccountMarketTokensQuery, AccountMarketTokensQueryVariables>(
        useAccountMarketTokensQuery, {
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
        },
        profileMarketTokensResponseMapper
    )
}

