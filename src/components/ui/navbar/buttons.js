import {Popover} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import React from "react";
import classNames from "../../../busines-layer/css-utils";
import {ChevronDownIcon} from "@heroicons/react/solid";

export const CloseMenuButton = () => {
    return (
        <Popover.Button
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Close menu</span>
            <XIcon className="h-6 w-6" aria-hidden="true"/>
        </Popover.Button>
    );
};

export const DropDownButton = ({isOpen, tabName}) => {
    return (
        <Popover.Button
            className={classNames(
                isOpen ? 'text-gray-900' : 'text-gray-500',
                'group bg-white rounded-md inline-flex items-center ' +
                'text-lg font-medium hover:text-gray-900 focus:outline-none ' +
                'focus:ring-2 focus:ring-offset-4 focus:ring-indigo-500'
            )}
        >
            {tabName}
            <ChevronDownIcon
                className={classNames(
                    isOpen ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                aria-hidden="true"
            />
        </Popover.Button>
    );
};

export const MenuButton = () => {
    return (
        <Popover.Button
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
        </Popover.Button>
    );
};
