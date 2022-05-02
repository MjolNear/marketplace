import React, {useCallback} from 'react';
import PopupFilter from "../PopupFilter";
import {BiSortAlt2} from 'react-icons/bi'
import SortOption from "./SortOption";
import {Popover} from '@headlessui/react';
import {ActivitySortName, TokenSortName} from "../../../../graphql/types";


interface SortFilterProps<T> {
    setSort: (sort: T) => void
    picked: T
    disabled?: boolean
}

interface InternalSortFilterProps<T> extends SortFilterProps<T> {
    options: T[]
    width?: number | string
}

function SortFilter<T extends { toString: () => string }>({
    picked,
    setSort,
    disabled,
    options,
    width
}: InternalSortFilterProps<T>) {

    const pickSort = useCallback((close: any, option: T) => {
        close()
        setSort(option)
    }, [])

    return (
        <PopupFilter name={picked}
                     disabled={disabled}
                     width={width}
                     icon={<BiSortAlt2 size={18}/>}
        >
            <Popover.Panel>
                {({close}) => (
                    <div className="flex flex-col items-center pt-3 gap-1 w-[220px]">
                        <div className="font-bold font-archivo text-left text-md text-gray-400 w-full px-5">
                            Sort by
                        </div>
                        <div className="mt-2">
                            {options.map(name => (
                                <SortOption key={name.toString()}
                                            text={name.toString()}
                                            isPicked={picked === name}
                                            onClick={() => pickSort(close, name)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </Popover.Panel>
        </PopupFilter>
    );
}

export const TokenSortFilter: React.FC<SortFilterProps<TokenSortName>> = ({
    picked,
    setSort,
    disabled
}) => {
    const options = [
        TokenSortName.RecentlyAdded,
        TokenSortName.PriceLowToHigh,
        TokenSortName.PriceHighToLow
    ]

    return <SortFilter options={options}
                       width={190}
                       setSort={setSort}
                       picked={picked}
                       disabled={disabled}
    />
}

export const ActivitySortFilter: React.FC<SortFilterProps<ActivitySortName>> = ({
    picked,
    setSort,
    disabled
}) => {
    const options = [
        ActivitySortName.RecentlyAdded,
        ActivitySortName.LastFirst,
        ActivitySortName.PriceLowToHigh,
        ActivitySortName.PriceHighToLow,
    ]

    return <SortFilter options={options}
                       width={190}
                       setSort={setSort}
                       picked={picked}
                       disabled={disabled}
    />
}