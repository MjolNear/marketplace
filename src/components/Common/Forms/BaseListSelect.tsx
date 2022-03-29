import {Listbox, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import {CheckIcon, SelectorIcon} from "@heroicons/react/solid";

export interface SelectItem {
    id?: string
    name?: string
    icon?: React.ReactNode
}

interface BaseListSelectProps {
    items: SelectItem[]
    selected: SelectItem
    emptyText?: string
    setSelected: (item: SelectItem) => void
}

const BaseListSelect: React.FC<BaseListSelectProps> = ({
    items,
    selected,
    emptyText = "Select collection",
    setSelected
}) => {
    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1 font-archivo">
                <Listbox.Button
                    className="inline-flex items-center justify-between relative w-full py-2 pl-3 pr-10 text-left
                               bg-white rounded-lg cursor-pointer focus:outline-none ring-[1px] h-[45px]
                               ring-gray-300 focus-visible:ring-blue-500 sm:text-sm"
                >
                    {selected.id
                        ?
                        <span className="inline-flex items-center gap-3 truncate">
                            {selected.icon}
                            <div className="py-3">
                              {selected.name}
                            </div>
                        </span>
                        :
                        <span className="text-gray-400 py-3">{emptyText}</span>
                    }
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options
                        className="absolute w-full mt-3 overflow-auto text-base bg-white
                                   rounded-lg shadow-mjol-gray max-h-60 ring-[1px] ring-gray-300
                                   focus:outline-none sm:text-sm">
                        {items.length === 0 &&
                            <div className="px-6 py-3 font-semibold">Collections not found</div>
                        }
                        {items.map(
                            item => <Listbox.Option
                                key={item.id ? item.id : "None"}
                                className={props => `cursor-pointer select-none relative px-6 ${
                                    props.active ? 'bg-mjol-hover shadow-mjol-gray' : 'text-gray-900'
                                }`}
                                value={item}
                            >
                                {props => <>
                      <span className={`inline-flex items-center gap-2 truncate 
                                        ${props.selected ? 'font-medium' : 'font-normal'}`}
                      >
                          {item.icon}
                          <div className="py-3">
                              {item.name ? item.name : "None"}
                            </div>
                      </span>
                                    {props.selected &&
                                        <span
                                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500">
                                            <CheckIcon className="w-5 h-5" aria-hidden="true"/>
                                    </span>
                                    }
                                </>
                                }
                            </Listbox.Option>
                        )}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
};

export default BaseListSelect;