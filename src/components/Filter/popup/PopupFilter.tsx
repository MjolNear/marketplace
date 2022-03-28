import {Popover, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';

interface PopupFilterProps {
    name: string | React.ReactNode,
    icon: React.ReactNode,
    disabled?: boolean
}

const PopupFilter: React.FC<PopupFilterProps> = ({
    name,
    icon,
    disabled,
    children,
}) => {
    return (
        <Popover>
            <Popover.Button className="inline-flex items-center gap-2 rounded-2xl px-5 py-2 font-archivo
                                       text-xs-2 ring-1 ring-blue-200 font-semibold
                                       focus:outline-none
                                       disabled:opacity-40
                                       "
                            disabled={disabled}
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
                <div className="z-50 absolute flex rounded-xl
                                mt-3 bg-white focus:outline-none shadow-mjol-blue
                                max-xs:transform
                                max-xs:-translate-x-1/2
                                max-xs:left-1/2
                                "
                >
                    {children}
                </div>
            </Transition>
        </Popover>
    );
};

export default PopupFilter;