import {Menu, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import MenuChevronButton from './MenuChevronButton';

interface ChevronButtonProps {
    name: string
    align: "left" | "right"
}

const NavbarMenu: React.FC<ChevronButtonProps> = ({
    name,
    align,
    children
}) => {
    return (
        <Menu as="div" className="relative inline-block">
            <MenuChevronButton name={name}/>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={`z-[100] absolute flex mt-3 bg-white focus:outline-none flex flex-col 
                                        w-[175px] shadow-mjol-gray rounded-lg overflow-hidden ${align === "left" ? "left-0" : "right-0"}`}
                >
                    {children}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default NavbarMenu;