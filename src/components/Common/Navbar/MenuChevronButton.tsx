import React from 'react';
import {Menu} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/solid";

interface PropTypes {
    name: string
}

const MenuChevronButton = React.memo<PropTypes>(({name}) => {
    return (
        <div className="px-5 py-2">
            <Menu.Button
                className="text-md font-archivo font-bold group
                      inline-flex justify-center items-center w-full text-gray-700
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
                      hover:text-black
                      "
            >
                {name}
                <ChevronDownIcon className="w-5 h-5 ml-2 text-gray-700 group-hover:text-black"
                                 aria-hidden="true"
                />
            </Menu.Button>
        </div>
    );
});

export default MenuChevronButton;