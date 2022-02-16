import {Menu} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import React from "react";

export const CloseMenuButton = React.memo(() => {
    return (
        <Menu.Button
            className="bg-white rounded-md p-2 inline-flex nfts-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Close menu</span>
            <XIcon className="h-6 w-6" aria-hidden="true"/>
        </Menu.Button>
    );
});

export const OpenMenuButton = React.memo(() => {
    return (
        <Menu.Button
            className="bg-white rounded-md p-2 inline-flex nfts-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
        </Menu.Button>
    );
});
