import { Menu } from '@headlessui/react';
import React from 'react';
import {Link} from "react-router-dom";

interface NavbarMenuItemProps {
    path: string,
    name: string
    icon?: React.ReactNode
}

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({
    path,
    name,
    icon
}) => {
    return (
        <Menu.Item>
            <Link to={path}
                  className="flex flex-row transition-all p-4 gap-3 text-[15px]
                         font-archivo hover:shadow-mjol-gray-xs hover:bg-mjol-hover">
                {icon}
                <div className="font-bold text-gray-800">
                    {name}
                </div>
            </Link>
        </Menu.Item>
    );
};

export default NavbarMenuItem;