import {Transition, Menu} from "@headlessui/react";
import React, {Fragment} from "react";
import MenuChevronButton from "./MenuChevronButton";
import {getCurrentWallet} from "../../../business-logic/near/wallet/wallet";
import NavigationLink from "./NavigationLink";
import classNames from "../../../utils/css-utils";
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
                    className={"z-20 absolute flex rounded-xl ring-[1px] ring-blue-100 " +
                        "mt-[6px] bg-white focus:outline-none shadow-mjol-base-blue " +
                        (name === "Profile"
                                ? "right-3"
                                : "left-3"
                        )
                    }
                >
                    <div className="flex flex-col px-2 py-2">
                        {tabs.map(props =>
                            <Menu.Item key={props.name}>
                                {props.name === "Sign out"
                                    ?
                                    <button onClick={() => getCurrentWallet().signOut()}
                                            className="px-4 py-3 gap-3 text-[15px]
                                                     opacity-80 hover:opacity-100 rounded-lg
                                                     font-archivo hover:bg-gray-100
                                                     focus:outline-none font-bold text-left
                                                     focus-visible:ring-0"
                                    >
                                        {props.name}
                                    </button>
                                    :
                                    <Link to={props.path}
                                          className="flex flex-row px-4 py-3 gap-3 text-[15px]
                                                     opacity-80 hover:opacity-100 rounded-lg
                                                     font-archivo hover:bg-gray-100 items-center">
                                        {props.icon}
                                        <div className="font-bold">{props.name}</div>
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