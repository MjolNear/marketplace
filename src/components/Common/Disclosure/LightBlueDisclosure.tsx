import React from 'react';
import {Disclosure} from "@headlessui/react";
import classNames from "../../../utils/css-utils";
import {ChevronUpIcon} from "@heroicons/react/solid";
import Hr from "../Borders/Hr";

interface TDisclosureProps {
    content: React.ReactNode,
    defaultOpen?: boolean
}

const LightBlueDisclosure: React.FC<TDisclosureProps> = ({
    content,
    children,
    defaultOpen = false
}) => {
    return (
        <Disclosure defaultOpen={defaultOpen}>
            {({open}) =>
                <div>
                    <Disclosure.Button
                        className={classNames(
                            "group flex justify-between font-archivo p-5 w-full text-md font-semibold " +
                            "text-left bg-mjol-blue-card-property",
                            open ? "rounded-t-lg" : "rounded-lg"
                        )}>
                        {content}
                        <ChevronUpIcon className={classNames(
                            "transform duration-200 w-6 h-6 font-archivo text-gray-500 group-hover:text-black",
                            open ? "" : "rotate-180",
                        )}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="bg-mjol-blue-card-property px-5 rounded-b-lg">
                        <Hr color="bg-gray-600"/>
                        <div className="w-full text-black font-medium text-sm pt-3 pb-2">
                            {children}
                        </div>
                    </Disclosure.Panel>
                </div>
            }
        </Disclosure>
    );
};

export default LightBlueDisclosure;