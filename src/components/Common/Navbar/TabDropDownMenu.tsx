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
                    className="z-20 absolute flex rounded-xl ring-[1px] ring-blue-100
                               mt-4 bg-white focus:outline-none shadow-mjol-blue-all-xs"
                >
                    <div className="flex flex-col items-center px-2 py-1 gap-1">
                        {tabs.map(({name: tabName, path}) =>
                            <Menu.Item key={tabName}>
                                <Link to={path}
                                      className="font-bold font-archivo text-black text-sm text-left w-full
                                                 py-[12px] px-[16px] inline-flex justify-between items-center
                                                 hover:bg-gray-200 rounded-xl
                                                 focus:outline-none
                                                 focus-visible:ring-0
                                                "
                                >
                                    {tabName}
                                </Link>
                            </Menu.Item>
                        )}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}