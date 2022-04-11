import React from 'react';
import {SelectorIcon} from "@heroicons/react/solid";
import {Listbox} from "@headlessui/react";
import {ListItem} from "./IListFormProps";
import {Optional} from "../../../../business-logic/types/aliases";

interface ListButtonProps {
    placeholder: string
    selected: Optional<ListItem>
}

const ListButton: React.FC<ListButtonProps> = ({
    selected,
    placeholder
}) => {
    return (
        <Listbox.Button
            className="inline-flex items-center justify-between relative w-full py-2 pl-3 pr-10 text-left
                               bg-white rounded-lg cursor-pointer focus:outline-none ring-[1px] h-[45px]
                               ring-gray-300 focus-visible:ring-blue-500 sm:text-sm"
        >
            {selected
                ?
                <span className="inline-flex items-center gap-3 truncate">
                    {selected.icon}
                    <div className="py-3 font-semibold">{selected.name}</div>
                </span>
                :
                <span className="text-gray-400 py-3">{placeholder}</span>
            }
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
            </span>
        </Listbox.Button>
    );
};

export default ListButton;