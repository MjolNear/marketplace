import {Popover, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import {PropsWithChildren} from "../../types";

interface PopupFilterProps {
    name: string | React.ReactNode
    icon: React.ReactNode
    disabled?: boolean
    width?: number | string
}

const PopupFilter: React.FC<PropsWithChildren<PopupFilterProps>> = ({
    name,
    icon,
    disabled,
    children,
    width
}) => {
    return (
        <Popover>
            {({open}) =>
                <>
                    <Popover.Button className={
                        "inline-flex items-center justify-between gap-2 rounded-xl px-4 py-2 " +
                        "font-archivo text-[13px] ring-[1.5px] font-semibold hover:ring-blue-300 " +
                        "focus:outline-none focus-visible:ring-blue-300 disabled:opacity-40 " +
                        (open ? "ring-blue-300" : "ring-blue-200")
                    }
                                    style={{
                                        width
                                    }}
                                    disabled={disabled}
                    >
                        {name}
                        {icon}
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
                        <div className="z-50 absolute flex rounded-xl overflow-hidden
                                mt-3 bg-white focus:outline-none shadow-mjol-blue
                                max-xs:transform
                                max-xs:-translate-x-1/2
                                max-xs:left-1/2
                                "
                        >
                            {children}
                        </div>
                    </Transition>
                </>
            }
        </Popover>
    );
};

export default PopupFilter;