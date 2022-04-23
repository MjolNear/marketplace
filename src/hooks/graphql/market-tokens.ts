import {TokenPriceRange, TokenSortOption} from "../../graphql/types";
import {useGenericListDataQuery} from "./useGenericListDataQuery";
import {
    AccountMarketTokensQuery,
    AccountMarketTokensQueryVariables,
    CollectionMarketTokensQuery,
    CollectionMarketTokensQueryVariables,
    TokensFilterQuery,
    TokensFilterQueryVariables,
    TokensTextSearchQuery,
    TokensTextSearchQueryVariables,
    useAccountMarketTokensQuery,
    useCollectionMarketTokensQuery,
    useTokensFilterQuery,
    useTokensTextSearchQuery,
} from "../../graphql/generated/market-graphql";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../utils/string";
import {GridToken} from "../../@types/Token";
import {Optional} from "../../@types/Aliases";
import {formatPrice} from "../../near/api/utils";
import {ContractVerificationStatus} from "../../@types/Contract";

export type MarketTokens = TokensFilterQuery['tokens']

const marketTokensResponseMapper = (data?: {
    tokens: MarketTokens
}) => {
    const tokens: GridToken[] = data?.tokens.map(token => ({
        ...token,
        contractId: token.contract.id,
        price: formatPrice(token.price),
        verification: token.contract.isVerified
            ? ContractVerificationStatus.Verified
            : ContractVerificationStatus.Unverified,
        contractName: token.contract.name || token.contract.id
    })) || []
    return tokens
}

export const useMarketTokens = (
    limit: number,
    sort: TokenSortOption,
    priceRange: TokenPriceRange
) => {
    return useGenericListDataQuery<GridToken, TokensFilterQuery, TokensFilterQueryVariables>(
        useTokensFilterQuery, marketTokensResponseMapper, {
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
    collectionId: Optional<string>
) => {
    return useGenericListDataQuery<GridToken, CollectionMarketTokensQuery, CollectionMarketTokensQueryVariables>(
        useCollectionMarketTokensQuery, marketTokensResponseMapper, {
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-and-network",
            variables: {
                collection: collectionId ? `${contractId}-${collectionId}` : contractId,
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
    return useGenericListDataQuery<GridToken, TokensTextSearchQuery, TokensTextSearchQueryVariables>(
        useTokensTextSearchQuery, marketTokensResponseMapper, {
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
        useAccountMarketTokensQuery, marketTokensResponseMapper, {
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

