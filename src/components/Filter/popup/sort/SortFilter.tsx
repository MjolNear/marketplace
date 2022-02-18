import React from 'react';
import PopupFilter from "../PopupFilter";
import {BiSortAlt2} from 'react-icons/bi'
import SortOption from "./SortOption";
import {Popover} from '@headlessui/react';
import {TokenSortName, TokenSortOption, tokenSortOptions} from "../../../../pages/explore/nft/ExploreNftsPage";


interface SortFilterProps {
    setSort: (option: TokenSortOption) => any,
    picked: TokenSortName
}

const SortFilter: React.FC<SortFilterProps> = ({setSort, picked}) => {

    const changeSort = (name: TokenSortName, close: any) => {
        close()
        setSort(tokenSortOptions[name])
    }

    const options = [TokenSortName.RecentlyAdded, TokenSortName.PriceLowToHigh, TokenSortName.PriceHighToLow]

    return (
        <PopupFilter name={`Sort by`}
                     icon={<BiSortAlt2 size={18}/>}
        >
            <Popover.Panel>
                {({close}) => (
                    <div className="flex flex-col items-center py-3 gap-1 w-[220px]">
                        <div className="font-bold font-archivo text-left text-md text-gray-400 w-full px-[20px]">
                            Sort by
                        </div>
                        <div className="px-[4px]">
                            {options.map(name => (
                                <SortOption key={name}
                                            text={name}
                                            isPicked={picked === name}
                                            onClick={() => changeSort(name, close)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </Popover.Panel>
        </PopupFilter>
    );
};

export default SortFilter;