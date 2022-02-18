import React, {useEffect, useState} from 'react';
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";

import {
    MarketTokensQuery,
    OrderDirection,
    Token_OrderBy,
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
    by: Token_OrderBy,
    direction: OrderDirection,
    name: TokenSortName
}

export enum TokenSortName {
    PriceLowToHigh = "Price: High to Low",
    PriceHighToLow = "Price: Low to High",
    RecentlyAdded = "Recently added"
}

export const tokenSortOptions: Record<TokenSortName, TokenSortOption> = {
    [TokenSortName.PriceLowToHigh]: {
        by: Token_OrderBy.Price,
        direction: OrderDirection.Asc,
        name: TokenSortName.PriceLowToHigh
    },
    [TokenSortName.PriceHighToLow]: {
        by: Token_OrderBy.Price,
        direction: OrderDirection.Desc,
        name: TokenSortName.PriceHighToLow
    },
    [TokenSortName.RecentlyAdded]: {
        by: Token_OrderBy.ListingTime,
        direction: OrderDirection.Desc,
        name: TokenSortName.RecentlyAdded
    }
}


const ExploreNftsPage = () => {
    const limit = 4
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
        variables: {
            skip: 0,
            first: limit,
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
        const previousTokens = previousQueryResult.tokens;
        const fetchMoreTokens = fetchMoreResult.tokens;
        setHasMore(!(fetchMoreTokens.length === 0))
        fetchMoreResult.tokens = [...previousTokens, ...fetchMoreTokens];
        return {...fetchMoreResult}
    }

    const nfts = data?.tokens.map(convertToEntity) || []

    const onLoadMore = (skip: number) => fetchMore({
        updateQuery,
        variables: {
            skip
        }
    })

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
            <PaginationCardList nfts={nfts}
                                loading={loading}
                                hasMore={hasMore}
                                onLoadMore={() => onLoadMore(nfts.length)}/>
        </div>
    )
};

export default ExploreNftsPage;