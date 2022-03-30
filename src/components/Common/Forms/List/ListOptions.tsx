import {Listbox} from '@headlessui/react';
import React from 'react';
import {ListItem} from "./IListFormProps";
import ListOption from "./ListOption";

interface ListOptionsProps {
    items: ListItem[]
    defaultItemText?: string
    emptyText?: string
}

const ListOptions: React.FC<ListOptionsProps> = ({
    items,
    defaultItemText,
    emptyText
}) => {
    return (
        <Listbox.Options
            className="absolute w-full mt-3 overflow-auto text-base bg-white
                       rounded-lg shadow-mjol-gray max-h-60 ring-[1px] ring-gray-300
                       focus:outline-none sm:text-sm">
            {items.length === 0
                ?
                <div className="px-6 py-3 font-semibold">
                    {emptyText}
                </div>
                :
                <>
                    {items.map(item => <ListOption item={item}/>)}
                    {defaultItemText && <ListOption defaultText={defaultItemText}/>}
                </>
            }
        </Listbox.Options>
    );
};

export default ListOptions;