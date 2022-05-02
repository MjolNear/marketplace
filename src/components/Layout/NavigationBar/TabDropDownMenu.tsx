import {Transition, Menu} from "@headlessui/react";
import React, {Fragment} from "react";
import MenuChevronButton from "./MenuChevronButton";
import {getCurrentWallet} from "../../../near/wallet/wallet";
import {Link} from "react-router-dom";

interface TabItem {
    name: string,
    path: string,
    icon?: React.ReactNode
}

interface PropTypes {
    name: string,
    tabs: TabItem[]
}


export const TabsDropDownMenu: React.FC<PropTypes> = ({name, tabs}) => {
    return (
        <Menu as="div" className="relative inline-block">
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
                    className={
                        "z-20 absolute flex mt-3 bg-white focus:outline-none flex flex-col w-[175px] shadow-mjol-gray rounded-lg overflow-hidden " +
                        (name === "Profile" ? "right-3" : "left-3")
                    }
                >
                    <div>
                        {tabs.map(props =>
                            <Menu.Item key={props.name}>
                                {props.name === "Sign out"
                                    ?
                                    <button onClick={() => getCurrentWallet().signOut()}
                                            className="flex flex-row transition-all p-4 text-[15px]
                                                     font-archivo text-left font-bold w-full
                                                     transition-all hover:shadow-mjol-gray-xs hover:bg-mjol-hover"
                                    >
                                        {props.name}
                                    </button>
                                    :
                                    <Link to={props.path}
                                          className="flex flex-row transition-all p-4 gap-3 text-[15px]
                                                     font-archivo
                                                     transition-all hover:shadow-mjol-gray-xs hover:bg-mjol-hover">
                                        {props.icon}
                                        <div className="font-bold text-gray-800">{props.name}</div>
                                    </Link>
                                }
                            </Menu.Item>
                        )}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}