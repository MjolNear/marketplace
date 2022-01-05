import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {login} from "../../../business-logic/api/near/contract/contract";
import classNames from "../../../utils/css-utils";
import {CloseMenuButton, MenuButton} from "../../ui/navbar/buttons";
import {Link} from "react-router-dom";
import {TabsDropDownMenu} from "./menu/TabDropDownMenu";
import imgLogo from "../../../resources/hammer.png"
import imgLabel from "../../../resources/label6.png"


function SmallNavBar({tabs}) {
    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {tabs.map(({path, name}) => (
                <>
                    {name === "Launchpad" || name === "Docs" ? (
                        <div
                            className="cursor-not-allowed text-base font-medium text-gray-900 hover:text-gray-500">
                            {name}
                        </div>
                    ) : (
                        <Link to={path} key={name}>
                            <div
                                className="cursor-pointer text-base font-medium text-gray-900 hover:text-gray-500">
                                {name}
                            </div>
                        </Link>
                    )}
                </>
            ))}
        </div>
    )
}

export default function Navbar({tabs}) {
    const exploreTabs = tabs.explore
    const createTabs = tabs.create
    const profileTabs = tabs.profile
    const singleTabs = tabs.single

    return (
        <Popover className="bg-light_white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <img
                                className="inline-block h-8 w-auto sm:h-10"
                                src={imgLogo}
                                alt=""
                            />
                            <img
                                className="inline-block h-8 w-auto sm:h-10"
                                src={imgLabel}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <MenuButton/>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <TabsDropDownMenu key="Explore" name="Explore" tabs={exploreTabs} isProfile={false}/>
                        <TabsDropDownMenu key="Create" name="Create" tabs={createTabs} isProfile={false}/>
                        {singleTabs.map(({name, path}) => (
                            <div
                                className={classNames(
                                    name === "Launchpad" || name === "Docs" ? 'cursor-not-allowed' : 'cursor-pointer',
                                    "text-lg font-extrabold text-cyan-700 hover:text-gray-900"
                                )}>
                                {name}
                            </div>
                        ))}
                    </Popover.Group>
                    {window.walletConnection.isSignedIn() ? (
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <TabsDropDownMenu name="Profile" tabs={profileTabs} isProfile={true}/>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link to="/"
                                  onClick={login}
                                  className="inline-flex justify-center py-1.5 px-4 font-bold text-lg font-large rounded-md text-white bg-gradient-to-br from-light_blue to-green-200 hover:text-gray-900 hover:from-green-200 hover:to-light_blue"
                            >
                                Sign in
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus
                               className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div
                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Link to="/">
                                        <img
                                            className="h-8 w-auto"
                                            src={imgLogo}
                                            alt="logo"/>
                                    </Link>
                                </div>
                                <div className="-mr-2">
                                    <CloseMenuButton/>
                                </div>
                            </div>
                        </div>
                        <div key="Explore" className="py-6 px-5 space-y-6">
                            <div className="text-cyan-700">Explore:</div>
                            <SmallNavBar tabs={exploreTabs}/>
                        </div>
                        <div key="Create" className="py-6 px-5 space-y-6">
                            <div className="text-cyan-700">Create:</div>
                            <SmallNavBar tabs={createTabs}/>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <SmallNavBar tabs={singleTabs}/>
                            {window.walletConnection.isSignedIn() ? (
                                <>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        {profileTabs.filter(item => item.name !== 'Sign out').map(({name, path}) => (
                                            <Link to={path} key={name}>
                                                <div
                                                    className="cursor-pointer text-base font-medium text-gray-900 hover:text-gray-500"
                                                >
                                                    {name}
                                                </div>
                                            </Link>
                                        ))}
                                        <Link to="/logout"
                                              className="cursor-pointer col-span-2 text-center font-medium text-gray-500 hover:text-gray-700"
                                        >
                                            Log out
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <Link to="/"
                                          onClick={login}
                                          className="cursor-pointer w-full py-2 flex items-center justify-center font-bold text-lg font-large rounded-md text-white bg-gradient-to-br from-light_blue to-green-200 hover:text-gray-900 hover:from-green-200 hover:to-light_blue"
                                    >
                                        Sign in
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}