import React from 'react';
import {Create, Docs, Explore, Launchpad, Logo, Profile} from "./Items";

const DesktopNavbarContent = () => {
    return (
        <div className="hidden lg:block max-w-7xl mx-auto px-5">
            <div className="flex justify-between items-center py-3 lg:justify-start lg:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Logo/>
                </div>
                <div className="flex flex-row gap-12">
                    <div className="space-x-8">
                        <Explore/>
                        <Create/>
                    </div>
                    <Launchpad/>
                    <Docs/>
                </div>
                <div className="flex items-center justify-end lg:flex-1 lg:w-0">
                    <Profile/>
                </div>
            </div>
        </div>
    );
};

export default DesktopNavbarContent;