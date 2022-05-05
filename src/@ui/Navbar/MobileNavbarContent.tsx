import React, {Fragment} from 'react';
import LogoLink from "../../components/Common/Links/LogoLink";
import {Menu, Transition} from "@headlessui/react";
import {OpenMenuButton} from "../../components/Layout/NavigationBar/MobileButtons";
import MobileTabSection from "../../components/Layout/NavigationBar/MobileTabSection";
import {getCurrentWallet} from "../../near/wallet/wallet";
import BlueGreenGradientButton from "../Buttons/Auth/BlueGreenGradientButton";
import {routesConfig} from "../../components/Layout/NavigationBar/routes-config";

const MobileNavbarContent = () => {
    const exploreTabs = routesConfig.explore
    const createTabs = routesConfig.create
    const profileTabs = routesConfig.profile

    return (
        <div className="block lg:hidden w-full p-3 inline-flex justify-between items-center">
            <LogoLink/>
            <Menu as="div">
                {({open}) => (
                    <>
                        <OpenMenuButton/>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform translate-x-full"
                            enterTo="transform translate-x-0"
                            leave="transition ease-in duration-200"
                            leaveFrom="transform translate-x-0"
                            leaveTo="transform translate-x-full"
                        >
                            <Menu.Items className="absolute left-0 min-h-[calc(100vh-96px)] w-full bg-white">
                                <div className="px-5 flex flex-col gap-3 pt-5">
                                    <MobileTabSection name="Explore" tabs={exploreTabs}/>
                                    <MobileTabSection name="Create" tabs={createTabs}/>
                                    {getCurrentWallet().isSignedIn()
                                        ?
                                        <MobileTabSection name="Profile" tabs={profileTabs}/>
                                        :
                                        <BlueGreenGradientButton title="Sign in"
                                                                 onClick={
                                                                     () => getCurrentWallet().requestSignIn()
                                                                 }/>
                                    }
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
};

export default MobileNavbarContent;