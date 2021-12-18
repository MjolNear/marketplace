import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {login, logout} from "../../utils/contract-utils";
import classNames from "../utils";
import {CloseMenuButton, DropDownButton, MenuButton} from "../ui/navbar/buttons";
import {Link} from "react-router-dom";


function TabsDropDownMenu({name, tabs, isProfile}) {
    return (
        <Popover className="relative">
            {({isOpen}) => (
                <div key={name}>
                    <DropDownButton isOpen={isOpen} tabName={name}/>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel
                            className={classNames(
                                isProfile ? '-ml-20' : '-ml-4',
                                "absolute z-10 -ml-4 mt-3 transform px-2"
                            )}>
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    {tabs.map(({path, name}) => (
                                        name === "Sign out"
                                            ? <Link to='/' key={name} onClick={logout}>
                                                <div className={classNames(
                                                    name === "Launchpad" ? 'cursor-not-allowed' : 'cursor-pointer',
                                                    "text-medium font-medium text-gray-500 hover:text-gray-900"
                                                )}>
                                                    {name}
                                                </div>
                                            </Link>
                                            : <Link key={name} to={path}>
                                                <div
                                                    className="cursor-pointer -m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                                                >
                                                    <p className="text-medium font-medium text-gray-900">{name}</p>
                                                </div>
                                            </Link>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </div>
            )}
        </Popover>
    )
}

function SmallNavBar({tabs}) {
    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {tabs.map(({path, name}) => (
                <Link to={path} key={name}>
                    <div
                        className="cursor-pointer text-base font-medium text-gray-900 hover:text-gray-500">
                        {name}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default function NavBar() {
    const exploreTabs = [
        {name: 'NFTs', path: '/nft'},
        {name: 'Collections', path: '/collections'},
    ]

    const createTabs = [
        {name: 'NFT', path: '/create-nft'},
        {name: 'Collection', path: '/create-collection'}
    ]

    const profileTabs = [
        {name: 'My NFTs', path: '/profile-nft'},
        {name: 'My Collections', path: '/profile-collection'},
        {name: 'Sign out', path: '/logout'}
    ]

    const singleTabs = [
        {name: 'Launchpad', path: '/launchpad'},
        {name: 'Docs', path: '/docs'}
    ]

    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
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
                            <Link to={path} key={name}>
                                <div
                                    className={classNames(
                                        name === "Launchpad" ? 'cursor-not-allowed' : 'cursor-pointer',
                                        "text-lg font-medium text-gray-500 hover:text-gray-900"
                                    )}>
                                    {name}
                                </div>
                            </Link>
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
                                  className="cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
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
                                    <Link to="/e">
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </Link>
                                </div>
                                <div className="-mr-2">
                                    <CloseMenuButton/>
                                </div>
                            </div>
                        </div>
                        <div key="Explore" className="py-6 px-5 space-y-6">
                            <div className="text-indigo-500">Explore:</div>
                            <SmallNavBar tabs={exploreTabs}/>
                        </div>
                        <div key="Create" className="py-6 px-5 space-y-6">
                            <div className="text-indigo-500">Create:</div>
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
                                        <Link to="/"
                                              onClick={logout}
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
                                          className="cursor-pointer w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
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