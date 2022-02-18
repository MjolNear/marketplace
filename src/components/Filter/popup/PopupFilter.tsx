import {Popover, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';

interface PopupFilterProps {
    name: string,
    icon: React.ReactNode,
}

const PopupFilter: React.FC<PopupFilterProps> = ({
    name,
    icon,
    children,
}) => {
    return (
        <Popover>
            <Popover.Button className="inline-flex items-center gap-2 rounded-2xl px-5 py-2 font-archivo
                                    text-xs-2 ring-1 ring-blue-200 font-semibold"
            >
                {icon}
                {name}
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div className="z-20 absolute flex rounded-xl ring-[1px] ring-blue-100
                                mt-4 bg-white focus:outline-none shadow-mjol-blue-all-xs"
                >
                    {children}
                </div>
            </Transition>
        </Popover>
    );
};

export default PopupFilter;