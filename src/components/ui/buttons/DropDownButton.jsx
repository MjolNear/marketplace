import React from 'react';
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/outline";

const DropDownButton = ({title, isOpen, ...props}) => {
    return (
        <button className="px-4 py-2 rounded-lg w-full
                           text-black text-mono
                           ring-inset ring-1 ring-blue-200
                           text-md md:text-lg
                           flex flex-row justify-between
                           hover:bg-blue-50
                           "
                {...props}
        >
            {title}
            {isOpen
                ? <ChevronDownIcon className="h-6 w-6"/>
                : <ChevronUpIcon className="h-6 w-6 transform duration-3000 rotate-90"/>
            }
        </button>
    );
};

export default DropDownButton;