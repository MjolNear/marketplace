import React, {Fragment, useCallback, useState} from 'react';
import LogoLink from "../../components/Common/Links/LogoLink";
import {Dialog, Transition} from "@headlessui/react";
import {routesConfig} from "../../components/Layout/NavigationBar/routes-config";
import {Launchpad, Profile} from "./Items";
import {HiMenu} from "react-icons/hi";
import {XIcon} from "@heroicons/react/solid";
import NavbarModalItem from "./Common/NavbarModalItem";
import {AiOutlineAppstore} from "react-icons/ai";
import {MdCollections} from "react-icons/md";
import {GiPaintBrush, GiPalette} from "react-icons/gi";
import Docs from "./Items/Docs";
import Activity from "./Items/Activity";

const MobileNavbarContent = () => {
    const exploreTabs = routesConfig.explore
    const createTabs = routesConfig.create

    const [menuVisible, setMenuVisible] = useState(false)

    const closeMenu = useCallback(() => setMenuVisible(false), [setMenuVisible])

    return (
        <div className="block lg:hidden w-full p-3 inline-flex justify-between items-center">
            <LogoLink/>
            <div className="inline-flex items-center gap-4">
                <Profile/>
                <button className="flex item-center" onClick={() => setMenuVisible(!menuVisible)}>
                    <HiMenu size={30} className="bg-transparent"/>
                </button>
                <Transition appear show={menuVisible} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 z-[150] lg:hidden" onClose={closeMenu}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25 background-blur"/>
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300"
                            enterFrom="transform opacity-0 max-lg:translate-y-[600px]"
                            enterTo="transform opacity-100 max-lg:translate-y-0"
                            leave="transition ease-in-out duration-300"
                            leaveFrom="transform opacity-100 max-lg:translate-y-0"
                            leaveTo="transform opacity-0 max-lg:translate-y-[600px]"
                        >
                            <div className="fixed inset-0 overflow-hidden">
                                <div className="flex max-lg:min-h-full max-xs:items-end
                                                xs:items-center xs:justify-center"
                                >
                                    <Dialog.Panel
                                        className="w-full xs:w-[350px] overflow-hidden bg-white
                                                   p-4 text-left xs:rounded-b-2xl rounded-t-2xl"
                                    >
                                        <div className="w-full flex justify-end">
                                            <button type="button" onClick={() => setMenuVisible(false)}
                                                    className="p-1 hover:bg-gray-100 rounded-full">
                                                <XIcon height={20} width={20}/>
                                            </button>
                                        </div>
                                        <div className="w-full h-full">
                                            <div className="flex flex-col space-y-1">
                                                <NavbarModalItem path="/nfts"
                                                                 name="Explore NFTs"
                                                                 close={closeMenu}
                                                                 icon={<AiOutlineAppstore size={18}/>}
                                                />
                                                <NavbarModalItem path="/collections"
                                                                 name="Explore Collections"
                                                                 close={closeMenu}
                                                                 icon={<MdCollections size={18}/>}
                                                />
                                                <NavbarModalItem path="/nfts/new"
                                                                 name="Create NFT"
                                                                 close={closeMenu}
                                                                 icon={<GiPaintBrush size={18}/>}
                                                />
                                                <NavbarModalItem path="/collections/new"
                                                                 name="Create Collection"
                                                                 close={closeMenu}
                                                                 icon={<GiPalette size={18}/>}
                                                />
                                                <Activity/>
                                                <Launchpad/>
                                                <Docs/>
                                            </div>
                                        </div>
                                    </Dialog.Panel>

                                </div>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition>
            </div>
        </div>
    );
};

export default MobileNavbarContent;