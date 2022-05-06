import React, {useCallback, useState} from 'react';
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";

import {TokenPriceRange, TokenSortName} from "../../../graphql/types";
import PriceRangeFilter from "../../../components/Filter/popup/price/PriceRangeFilter";
import {TokenSortFilter} from "../../../components/Filter/popup/sort/SortFilter";
import SearchInput from "../../../components/Filter/search/SearchInput";
import useDebounce from "../../../hooks/useDebounce";
import ExploreSearchTokens from "./ExploreSearchTokens";
import ExploreFilterTokens from "./ExploreFilterTokens";
import CardListLoader from "../../../components/CardList/CardListLoader";
import {CardSizeSwitcher} from "../../../context/CardSizeContext";
import FilterWrapper from "../../../components/Filter/FilterWrapper";


const ExploreNftsPage = () => {
    const [priceRange, setPriceRange] = useState<TokenPriceRange>({})
    const clearPriceRange = useCallback(() => setPriceRange({}), [])

    const [sort, setSort] = useState(TokenSortName.RecentlyAdded)

    const [textQueryFilter, setTextQueryFilter] = useState('')
    const debounceQuery = useDebounce(textQueryFilter, 1000)

    // const activeFilters: {name:string, value: string | React.ReactNode}[] = []


    // const getActiveFilters = () => {
    //
    //     let filters: { name: string, value: string | React.ReactNode }[] = []
    //
    //     if (sort.name !== TokenSortName.RecentlyAdded) {
    //         filters.push({name: "Order by", value: sort.name})
    //     }
    //
    //     if (textQueryFilter) {
    //         filters.push({name: "Search by", value: textQueryFilter})
    //     }
    //
    //     const {from, to} = priceRange
    //     if (from || to) {
    //         const value = from && to
    //             ? `from ${formatNearAmount(from, 3)} to ${formatNearAmount(to, 3)}`
    //             : to
    //                 ? `less than ${formatNearAmount(to, 3)}`
    //                 : `greater than ${formatNearAmount(from || "0", 3)}`
    //
    //
    //         filters.push({
    //             name: "Price",
    //             value:
    //                 <div className="inline-flex gap-2 items-center">
    //                     {value}
    //                     <NearIcon size={11} fill="fill-gray-700"/>
    //                 </div>
    //         })
    //     }
    //
    //     return filters
    // }
    //
    // const clearFilters = useCallback(() => {
    //     setTextQueryFilter('')
    //     setPriceRange({})
    //     setSort(tokenSortOptions[TokenSortName.RecentlyAdded])
    // }, [])

    return (
        <div className="max-w-screen-2xl mx-auto">
            <BlueShadowContainer>
                <div className="flex flex-col pb-10 px-4 space-y-8 items-center">
                    <DarkBlueTitle title="Explore NFTs"/>
                    <SearchInput placeholder="Search by NFT name, Collection or Contract"
                                 searchQueryText={textQueryFilter}
                                 setSearchQueryText={setTextQueryFilter}
                    />
                </div>
            </BlueShadowContainer>
            <FilterWrapper>
                <PriceRangeFilter
                    disabled={!!textQueryFilter}
                    onClear={clearPriceRange}
                    current={priceRange}
                    onApply={setPriceRange}
                />
                <TokenSortFilter disabled={!!textQueryFilter}
                                 picked={sort}
                                 setSort={setSort}
                />
                <CardSizeSwitcher/>
            </FilterWrapper>
            {debounceQuery !== textQueryFilter
                ?
                <div className="py-5">
                    <CardListLoader/>
                </div>
                :
                debounceQuery
                    ?
                    <ExploreSearchTokens searchQuery={debounceQuery}
                    />
                    :
                    <ExploreFilterTokens priceRange={priceRange} sort={sort}/>
            }
        </div>
    )
};

export default ExploreNftsPage;