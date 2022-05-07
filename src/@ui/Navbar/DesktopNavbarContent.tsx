import React from 'react';
import {Create, Docs, Explore, Launchpad, Logo, Profile} from "./Items";
import Activity from "./Items/Activity";

const DesktopNavbarContent = () => {
    return (
        <div className="hidden lg:block max-w-7xl mx-auto px-5 w-full">
            <div className="w-full flex flex-row justify-between items-center py-3 lg:justify-start lg:space-x-10">
                <Logo/>
                <div className="flex flex-row items-center justify-around gap-8 w-full">
                    <div className="space-x-8">
                        <Explore/>
                        <Create/>
                        <Activity/>
                    </div>
                    <div className="space-x-8">
                        <Launchpad/>
                        <Docs/>
                    </div>
                </div>
                <Profile/>
            </div>
        </div>
    );
};

export default DesktopNavbarContent;