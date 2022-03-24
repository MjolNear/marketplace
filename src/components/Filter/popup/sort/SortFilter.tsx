import React, {memo} from 'react';
import PopupFilter from "../PopupFilter";
import {BiSortAlt2} from 'react-icons/bi'
import SortOption from "./SortOption";
import {Popover} from '@headlessui/react';
import {TokenSortName, TokenSortOption, tokenSortOptions} from "../../../../graphql/utils";


interface SortFilterProps {
    setSort: (sort: TokenSortOption) => void,
    picked: TokenSortName,
    disabled?: boolean
}

const SortFilter: React.FC<SortFilterProps> = ({
    setSort,
    picked,
    disabled,
}) => {

    const options = [
        TokenSortName.RecentlyAdded,
        TokenSortName.PriceLowToHigh,
        TokenSortName.PriceHighToLow
    ]

    return (
        <PopupFilter name="Sort by"
                     disabled={disabled}
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
                                            onClick={() => {
                                                close()
                                                setSort(tokenSortOptions[name])
                                            }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </Popover.Panel>
        </PopupFilter>
    );
};

export default memo(SortFilter);