import React from 'react';
import {CheckIcon} from "@heroicons/react/solid";
import {Listbox} from "@headlessui/react";
import {ListItem} from "./IListFormProps";

interface ListOptionProps {
    item?: ListItem
    useCheckIcon?: boolean
    defaultText?: string
}

const ListOption: React.FC<ListOptionProps> = ({
    item,
    useCheckIcon,
    defaultText
}) => {
    return (
        <Listbox.Option
            key={item?.id || "default-item-id"}
            value={item || null}
            className={({active}) =>
                `cursor-pointer transition-all select-none relative px-6 ${active ? 'bg-mjol-hover shadow-mjol-gray' : 'text-gray-900'}`}
        >
            {({selected}) =>
                <>
                      <span className="inline-flex items-center gap-2 truncate">
                          {item?.icon}
                          <div className={`py-3 ${selected ? 'font-normal' : 'font-medium'}`}>
                              {item ? item.name : defaultText}
                          </div>
                      </span>
                    {selected && useCheckIcon &&
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500">
                        <CheckIcon className="w-5 h-5" aria-hidden="true"/>
                    </span>
                    }
                </>
            }
        </Listbox.Option>
    );
};

export default ListOption;