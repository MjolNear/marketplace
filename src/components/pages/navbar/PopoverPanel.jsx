import React from 'react';
import classNames from "../../../utils/css-utils";
import {Popover} from '@headlessui/react'

const PopoverPanel = React.forwardRef(({isProfile, tabs}) => {
    return (
        <Popover.Panel
            className={classNames(
                isProfile ? '-ml-20' : '-ml-4',
                "absolute z-10 -ml-4 mt-3 transform px-2"
            )}>
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {tabs.map((item) => (
                        <a href={item.path}>
                            <div
                                className="cursor-pointer -m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                key={item.name}
                            >
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </Popover.Panel>
    );
});

export default PopoverPanel;