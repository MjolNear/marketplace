import React, {useEffect, useState} from 'react';
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";

import {
    MarketTokensQuery,
    OrderDirection,
    MarketToken_OrderBy,
    useMarketTokensQuery, useMarketTokensSearchQuery, MarketTokensSearchQuery
} from "../../../graphql/generated/graphql";
import {convertToMarketToken} from "../../../graphql/utils";
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import PriceRangeFilter from "../../../components/Filter/popup/PriceRangeFilter";
import SortFilter from "../../../components/Filter/popup/sort/SortFilter";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../../utils/string";
import SearchInput from "../../../components/Filter/search/SearchInput";
import useDebounce from "../../../hooks/useDebounce";


export interface TokenPriceRange {
    from?: string,
    to?: string
}

export interface SearchText {
    text?: string
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


const ExploreNftsPage = () => {
    const limit = 24
    const [hasMore, setHasMore] = useState(true)

    const initialSort = tokenSortOptions[TokenSortName.RecentlyAdded]
    const initialPriceRange: TokenPriceRange = {}
    const [textQuery, setTextQuery] = useState<string>('')
    const debounceQuery = useDebounce(textQuery, 300)

    const [filters, setFilters] = useState({
        priceRange: initialPriceRange,
        sort: initialSort,
    })

    const {data, loading, fetchMore, error} = useMarketTokensQuery({
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only",
        variables: {
            offset: 0,
            limit,
            orderBy: filters.sort.by,
            orderDirection: filters.sort.direction,
            priceFrom: filters.priceRange.from || MIN_ITEM_YOCTO_PRICE,
            priceTo: filters.priceRange.to || MAX_ITEM_YOCTO_PRICE
        }
    })

    const {data: searchData, loading: searchLoading, fetchMore: searchFetchMore} = useMarketTokensSearchQuery({
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only",
        variables: {
            offset: 0,
            limit,
            text: debounceQuery
        }
    })

    const updateQuery = (
        previousQueryResult: MarketTokensQuery,
        options: { fetchMoreResult?: MarketTokensQuery }
    ) => {
        const fetchMoreResult = options.fetchMoreResult
        if (!fetchMoreResult) {
            return previousQueryResult;
        }
        const previousTokens = previousQueryResult.marketTokens;
        const fetchMoreTokens = fetchMoreResult.marketTokens;
        console.log(fetchMoreTokens.length)
        setHasMore(fetchMoreTokens.length === limit)
        fetchMoreResult.marketTokens = [...previousTokens, ...fetchMoreTokens];
        return {...fetchMoreResult}
    }

    const updateSearchQuery = (
        previousQueryResult: MarketTokensSearchQuery,
        options: { fetchMoreResult?: MarketTokensSearchQuery }
    ) => {
        const fetchMoreResult = options.fetchMoreResult
        if (!fetchMoreResult) {
            return previousQueryResult;
        }
        const previousTokens = previousQueryResult.marketSearch;
        const fetchMoreTokens = fetchMoreResult.marketSearch;
        setHasMore(fetchMoreTokens.length === limit)
        fetchMoreResult.marketSearch = [...previousTokens, ...fetchMoreTokens];
        return {...fetchMoreResult}
    }

    const onLoadMore = (offset: number, debounceValue: string) => {
        return debounceValue
            ?
            searchFetchMore({
                updateQuery: updateSearchQuery,
                variables: {
                    skip: offset
                }
            })
            :
            fetchMore({
                updateQuery,
                variables: {
                    offset
                }
            })
    }

    useEffect(() => {
        setHasMore(true)
    }, [filters])

    useEffect(() => {
        setHasMore(!error)
    }, [error])

    console.log("render")
    console.log(debounceQuery)

    const tokens = debounceQuery
        ? searchData?.marketSearch.map(convertToMarketToken) || []
        : data?.marketTokens.map(convertToMarketToken) || []

    return (
        <div className="max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="flex flex-col pb-10 px-4 space-y-8 items-center">
                    <DarkBlueTitle title="Explore NFTs"/>
                    <SearchInput placeholder="Search by NFT name"
                                 searchQueryText={textQuery}
                                 setSearchQueryText={setTextQuery}
                    />
                </div>
            </BlueShadowContainer>
            <div className="inline-flex flex-wrap gap-4 w-full justify-center mb-2">
                <PriceRangeFilter
                    onClear={() => {
                        setFilters({
                            ...filters,
                            priceRange: initialPriceRange
                        })
                    }}
                    onApply={priceRange => {
                        setFilters({
                            ...filters,
                            priceRange
                        })
                    }}
                />
                <SortFilter picked={filters.sort.name}
                            setSort={sort => {
                                setFilters({
                                    ...filters,
                                    sort
                                })
                            }}/>
            </div>
            <PaginationCardList tokens={tokens}
                                loading={loading || searchLoading}
                                hasMore={hasMore}
                                onLoadMore={() => onLoadMore(tokens.length, debounceQuery)}/>
        </div>
    )
};

export default ExploreNftsPage;