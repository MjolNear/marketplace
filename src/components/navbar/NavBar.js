import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {ChevronDownIcon} from '@heroicons/react/solid'
import {login, logout} from "../../utils/contract-utils";
import {Link} from "react-router-dom";

const exploreTabs = [
    {name: 'NFTs', path: '/nft'},
    {name: 'Collections', path: 'collections'},
];

const createTabs = [
    {name: 'NFT', path: '/create-nft'},
    {name: 'Collection', path: '/create-collection'}
];

const profileTabs = [
    {name: 'My NFTs', path: '/my-nft'},
    {name: 'My Collections', path: '/my-collection'},
    {name: 'Sign out', path: '/logout'}
];

const singleTabs = [
    {name: 'Launchpad', path: '/launchpad'},
    {name: 'Docs', path: '/docs'}
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function openTab(tabName) {
    console.log(tabName);
    if (tabName === "Sign out") {
        logout();
    }
}

function NavItemWithDrop({name, tabs, isProfile}) {
    return (
        <Popover className="relative">
            {({open}) => (
                <>
                    <Popover.Button
                        className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        )}
                    >
                        <span>{name}</span>
                        <ChevronDownIcon
                            className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                        />
                    </Popover.Button>

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
                            <div
                                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    {tabs.map((item) => (
                                        <div
                                            className="cursor-pointer -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                            key={item.name}
                                        >
                                            <div className="ml-4">
                                                <Link to={item.path}>
                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}

function NavSmallItem({tabs}) {
    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {tabs.map((item) => (
                <a
                    key={item.name}
                    onClick={() => openTab(item.name)}
                    className="cursor-pointer text-base font-medium text-gray-900 hover:text-gray-500"
                >
                    {item.name}
                </a>
            ))}
        </div>
    )
}


export default function NavBar() {
    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <NavItemWithDrop name="Explore" tabs={exploreTabs} isProfile={false}/>
                        <NavItemWithDrop name="Create" tabs={createTabs} isProfile={false}/>
                        {singleTabs.map((item) => (
                            // <div
                            //     className={classNames(
                            //         item.name === "Launchpad" ? 'cursor-not-allowed' : 'cursor-pointer',
                            //         "text-base font-medium text-gray-500 hover:text-gray-900"
                            //     )}
                            //     key={item.name}
                            // >
                            //     <Link to={item.path}>{item.name}</Link>
                            // </div>
                            <a
                                key={item.name}
                                onClick={() => openTab(item.name)}
                                className={classNames(
                                    item.name === "Launchpad" ? 'cursor-not-allowed' : 'cursor-pointer',
                                    "text-base font-medium text-gray-500 hover:text-gray-900"
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </Popover.Group>
                    {window.walletConnection.isSignedIn() ? (
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <NavItemWithDrop name="Profile" tabs={profileTabs} isProfile={true}/>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                onClick={login}
                                className="cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign in
                            </a>
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
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="text-indigo-500">Explore:</div>
                            <NavSmallItem tabs={exploreTabs}/>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="text-indigo-500">Create:</div>
                            <NavSmallItem tabs={createTabs}/>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <NavSmallItem tabs={singleTabs}/>
                            {window.walletConnection.isSignedIn() ? (
                                <>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        {profileTabs.filter(item => item.name !== 'Sign out').map((item) => (
                                            <a
                                                key={item.name}
                                                // onClick={() => openTab(item.name)}
                                                className="cursor-pointer text-base font-medium text-gray-900 hover:text-gray-500"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                        <a
                                            onClick={logout}
                                            className="cursor-pointer col-span-2 text-center font-medium text-gray-500 hover:text-gray-700"
                                        >
                                            Log out
                                        </a>
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <a
                                        onClick={login}
                                        className="cursor-pointer w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Sign in
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}