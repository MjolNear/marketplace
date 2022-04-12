import React, {useCallback, useState} from 'react';
import BlueShadowContainer from "../../../components/Common/Shadow/BlueShadowContainer";
import DarkBlueTitle from "../../../components/Common/Text/DarkBlueTitle";

import {TokenPriceRange, TokenSortName} from "../../../graphql/utils";
import PriceRangeFilter from "../../../components/Filter/popup/price/PriceRangeFilter";
import SortFilter from "../../../components/Filter/popup/sort/SortFilter";
import SearchInput from "../../../components/Filter/search/SearchInput";
import useDebounce from "../../../hooks/useDebounce";
import ExploreSearchTokens from "./ExploreSearchTokens";
import ExploreFilterTokens from "./ExploreFilterTokens";
import ActiveFilters from "../../../components/Filter/ActiveFilters";
import {formatNearAmount} from "near-api-js/lib/utils/format";
import NearIcon from "../../../components/Icons/near/NearIcon";
import activeFilters from "../../../components/Filter/ActiveFilters";
import CollectionListLoader from "../../../components/CollectionList/CollectionListLoader";
import ExploreSearchCollections from "../collection/ExploreSearchCollections";
import ExploreFilterCollections from "../collection/ExploreFilterCollections";
import CardListLoader from "../../../components/CardList/CardListLoader";


const ExploreNftsPage = () => {
    const LIMIT = 12

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
            <div className="flex flex-col items-center gap-6">
                <div className="inline-flex flex-wrap gap-4 w-full justify-center mb-2">
                    <PriceRangeFilter
                        disabled={!!textQueryFilter}
                        onClear={clearPriceRange}
                        onApply={setPriceRange}
                    />
                    <SortFilter disabled={!!textQueryFilter}
                                picked={sort}
                                setSort={setSort}
                    />
                </div>
            </div>
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