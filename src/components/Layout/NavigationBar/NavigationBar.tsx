import React, {Fragment} from 'react'
import {Popover, Transition, Menu} from '@headlessui/react'
import {OpenMenuButton} from "./MobileButtons";
import {TabsDropDownMenu} from "./TabDropDownMenu";
import {getCurrentWallet} from "../../../near/wallet/wallet";
import {IoIosRocket} from 'react-icons/io'
import {SiGitbook} from 'react-icons/si'
import LogoLink from "../../Common/Links/LogoLink";
import MobileTabSection from "./MobileTabSection";
import BetaHeader from "../BetaHeader";
import Tooltip from "../Tooltip";
import {routesConfig} from "./routes-config";
import {Indicator} from "../../../context/fallback-progress";
import {Line} from "rc-progress";
import BlueGreenGradientButton from "../../../@ui/Buttons/Auth/BlueGreenGradientButton";

const NavigationBar = React.memo(() => {
    const exploreTabs = routesConfig.explore
    const createTabs = routesConfig.create
    const profileTabs = routesConfig.profile
    const singleTabs = routesConfig.single

    return (
        <Popover
            className="bg-white fixed top-0 z-[100] w-full bg-opacity-80 backdrop-blur-2xl drop-shadow-md lg:drop-shadow-none">
            {/*<BetaHeader/>*/}
            <Indicator/>
            <div className="hidden lg:block max-w-7xl mx-auto px-5">
                <div className="flex justify-between items-center py-3 lg:justify-start lg:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <LogoLink/>
                    </div>
                    <div className="flex space-x-12">
                        <div>
                            <TabsDropDownMenu key="Explore" name="Explore" tabs={exploreTabs}/>
                            <TabsDropDownMenu key="Create" name="Create" tabs={createTabs}/>
                        </div>
                        {singleTabs.map(({name, path}) => (
                            <div key={name} className="cursor-pointer inline-flex gap-2 items-center group">
                                {name === "Launchpad"
                                    ? <p className="text-transparent bg-clip-text font-archivo bg-gradient-to-r
                                                  from-mjol-blue-base to-blue-600 group-hover:text-blue-500 text-md
                                                  font-archivo font-bold opacity-50"
                                         data-tip="Coming soon!"
                                         data-for="launchpadTooltip"
                                    >
                                        {name}
                                    </p>
                                    :
                                    <a className="text-gray-600 group-hover:text-black opacity-100 text-md font-archivo
                                                 font-bold"
                                       href="https://oleg-bobrov.gitbook.io/mjolnear/"
                                       target="_blank"
                                       rel="noreferrer"
                                    >
                                        {name}
                                    </a>
                                }
                                {name === "Launchpad"
                                    ? <IoIosRocket size={18} className="fill-blue-500 opacity-50"/>
                                    : <SiGitbook size={18} color="#64748b" className="group-hover:fill-black"/>
                                }
                                <Tooltip id="launchpadTooltip" place="bottom"/>
                            </div>
                        ))}
                    </div>
                    {getCurrentWallet().isSignedIn()
                        ?
                        <div className="flex items-center justify-end lg:flex-1 lg:w-0">
                            <TabsDropDownMenu name="Profile" tabs={profileTabs}/>
                        </div>
                        :
                        <div className="flex items-center justify-end lg:flex-1 lg:w-0">
                            <button onClick={() => getCurrentWallet().requestSignIn()}
                                    className="inline-flex justify-center py-1.5 px-4 font-bold text-md font-bold
                                                rounded-md text-white bg-gradient-to-br from-mjol-blue-base to-green-200
                                               hover:from-green-200 hover:to-mjol-blue-base"
                            >
                                Sign in
                            </button>
                        </div>
                    }
                </div>
            </div>


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
                                <Menu.Items
                                    className="absolute left-0 top-24 min-h-[calc(100vh-96px)] w-full bg-white">
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
        </Popover>
    )
})

export default NavigationBar;