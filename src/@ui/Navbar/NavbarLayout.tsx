import React from "react";
import DesktopNavbarContent from "./DesktopNavbarContent";
import MobileNavbarContent from "./MobileNavbarContent";

const NavbarLayout: React.FC = () => {
    return (
        <div className="bg-white sticky top-0 left-0 right-0 z-[100] w-full bg-opacity-80 backdrop-blur-2xl">
            <DesktopNavbarContent/>
            <MobileNavbarContent/>
        </div>
    );
};

export default NavbarLayout;