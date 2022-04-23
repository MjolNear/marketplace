import React, {useCallback, useState} from 'react';
import BlueToggle from "../../../components/Common/Filters/Toggle/BlueToggle";
import PriceRangeFilter from "../../../components/Filter/popup/price/PriceRangeFilter";
import {TokenSortFilter} from "../../../components/Filter/popup/sort/SortFilter";
import CollectionNftList from "./CollectionNftList";
import CollectionMarketNftList from "./CollectionMarketNftList";
import {TokenPriceRange, TokenSortName} from "../../../graphql/types";
import {CollectionId, ContractId} from "../../../@types/Aliases";
import {CardSizeSwitcher} from "../../../context/CardSizeContext";

interface CollectionTokensProps {
    contractId: ContractId
    collectionId: CollectionId
    setPageState: (s: "init" | "only-market" | "all") => void,
    pageState: "init" | "only-market" | "all"
    supply: number
}

const CollectionTokens: React.FC<CollectionTokensProps> = ({
    contractId,
    collectionId,
    pageState,
    setPageState,
    supply
}) => {

    const [priceRange, setPriceRange] = useState<TokenPriceRange>({})
    const clearPriceRange = useCallback(() => setPriceRange({}), [])

    const [sort, setSort] = useState(TokenSortName.RecentlyAdded)

    return (
        <>
            <div className="inline-flex flex-wrap gap-20 w-full justify-center mb-2">
                <BlueToggle text="Buy now"
                            handleToggle={(() => {
                                setPageState(
                                    pageState === "init" || pageState === "only-market"
                                        ? "all"
                                        : "only-market"
                                )
                            })}
                            defaultChecked={pageState === "init" || pageState === "only-market"}
                />
                <div className="inline-flex gap-5">
                    <PriceRangeFilter
                        disabled={pageState === "all"}
                        onClear={clearPriceRange}
                        current={priceRange}
                        onApply={setPriceRange}
                    />
                    <TokenSortFilter disabled={pageState === "all"}
                                     picked={sort}
                                     setSort={setSort}
                    />
                    <CardSizeSwitcher/>
                </div>
            </div>
            <>
                {pageState === "all"
                    ?
                    <CollectionNftList contractId={collectionId}
                                       collectionId={contractId}
                                       total={supply}
                    />
                    :
                    <CollectionMarketNftList collectionContract={contractId}
                                             collectionId={collectionId}
                                             sort={sort}
                                             priceRange={priceRange}
                    />
                }
            </>
        </>
    );
};

export default CollectionTokens;