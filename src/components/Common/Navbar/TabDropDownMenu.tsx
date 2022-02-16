import {Transition, Menu} from "@headlessui/react";
import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import MenuChevronButton from "./MenuChevronButton";
import PuzzleIcon from "../../Icons/PuzzleIcon";

interface TabItem {
    name: string,
    path: string
}

interface PropTypes {
    name: string,
    tabs: TabItem[]
}


export const TabsDropDownMenu: React.FC<PropTypes> = ({name, tabs}) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <MenuChevronButton name={name}/>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute mt-2 bg-white rounded-md drop-shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1 flex flex-col">
                        {tabs.map(({name: tabName, path}) =>
                            <Menu.Item key={tabName}>
                                {({active}) => (
                                    <div className="inline-flex justify-between gap-1">
                                        <Link
                                            to={path}
                                            className={`${
                                                active ? 'bg-gray-100 text-black' : 'text-gray-900'
                                            } rounded-md w-full px-6 py-3 text-sm font-archivo font-semibold`}
                                        >
                                            {tabName}
                                        </Link>
                                    </div>
                                )}
                            </Menu.Item>
                        )}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}