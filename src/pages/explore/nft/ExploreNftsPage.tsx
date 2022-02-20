import React, {useEffect, useState} from 'react';
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";

import {
    MarketTokensQuery,
    OrderDirection,
    MarketToken_OrderBy,
    useMarketTokensQuery
} from "../../../graphql/generated/graphql";
import {convertToEntity} from "../../../graphql/utils";
import PaginationCardList from "../../../components/CardList/PaginationCardList";
import PriceRangeFilter from "../../../components/Filter/popup/PriceRangeFilter";
import SortFilter from "../../../components/Filter/popup/sort/SortFilter";
import {MAX_ITEM_YOCTO_PRICE, MIN_ITEM_YOCTO_PRICE} from "../../../utils/string";


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
        by: MarketToken_OrderBy.ListingTime,
        direction: OrderDirection.Desc,
        name: TokenSortName.RecentlyAdded
    }
}


const ExploreNftsPage = () => {
    const limit = 12
    const [hasMore, setHasMore] = useState(true)

    const initialSort = tokenSortOptions[TokenSortName.RecentlyAdded]
    const initialPriceRange: TokenPriceRange = {}
    const initialSearchText: SearchText = {}

    const [filters, setFilters] = useState({
        priceRange: initialPriceRange,
        sort: initialSort,
        search: initialSearchText
    })

    const {data, loading, fetchMore} = useMarketTokensQuery({
        fetchPolicy: "network-only",
        nextFetchPolicy: "network-only",
        variables: {
            offset: 0,
            limit: limit,
            orderBy: filters.sort.by,
            orderDirection: filters.sort.direction,
            priceFrom: filters.priceRange.from || MIN_ITEM_YOCTO_PRICE,
            priceTo: filters.priceRange.to || MAX_ITEM_YOCTO_PRICE
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
        setHasMore(fetchMoreTokens.length === limit)
        fetchMoreResult.marketTokens = [...previousTokens, ...fetchMoreTokens];
        return {...fetchMoreResult}
    }

    const onLoadMore = (offset: number) => fetchMore({
        updateQuery,
        variables: {
            offset
        }
    })

    useEffect(() => {
        setHasMore(true)
    }, [filters])

    const tokens = data?.marketTokens.map(convertToEntity) || []

    return (
        <div className="max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="flex flex-col pb-10 px-4 space-y-8 items-center">
                    <DarkBlueTitle title="Explore NFTs"/>
                    {/*<SearchInput placeholder="Search by NFT name"*/}
                    {/*             searchQueryText={filters.search.text || ''}*/}
                    {/*             setSearchQueryText={(query) => setFilters({...filters, search: query})}*/}
                    {/*/>*/}
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
                                loading={loading}
                                hasMore={hasMore}
                                onLoadMore={() => onLoadMore(tokens.length)}/>
        </div>
    )
};

export default ExploreNftsPage;