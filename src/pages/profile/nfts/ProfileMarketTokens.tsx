import React, {useCallback, useState} from 'react';
import {TokenPriceRange, TokenSortName, tokenSortOptions} from "../../../graphql/utils";
import PriceRangeFilter from "../../../components/Filter/popup/price/PriceRangeFilter";
import SortFilter from "../../../components/Filter/popup/sort/SortFilter";
import ProfileFilterMarketTokens from "./market/ProfileFilterMarketTokens";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import withAuthData, {TAuthProps} from "../../../hoc/withAuthData";


const ProfileMarketTokens: React.FC<TAuthProps> = ({
    accountId
}) => {
    const limit = 12

    const [priceRange, setPriceRange] = useState<TokenPriceRange>({})
    const clearPriceRange = useCallback(() => setPriceRange({}), [])
    const [sort, setSort] = useState(TokenSortName.RecentlyAdded)

    return (
        <>
            <div className="flex flex-col items-center gap-6">
                <div className="inline-flex flex-wrap gap-4 w-full justify-center mb-2">
                    <PriceRangeFilter
                        disabled={false}
                        onClear={clearPriceRange}
                        onApply={setPriceRange}
                    />
                    <SortFilter disabled={false}
                                picked={sort}
                                setSort={setSort}
                    />
                </div>
            </div>
            <ProfileFilterMarketTokens accountId={accountId}
                                       limit={limit}
                                       priceRange={priceRange}
                                       sort={tokenSortOptions[sort]}
            />
        </>
    );
};

export default withAuthRedirect(withAuthData(ProfileMarketTokens));