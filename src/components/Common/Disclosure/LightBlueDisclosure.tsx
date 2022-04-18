import React from 'react';
import {Disclosure} from "@headlessui/react";
import classNames from "../../../utils/css-utils";
import {ChevronUpIcon} from "@heroicons/react/solid";
import Hr from "../Borders/Hr";
import {PropsWithChildren} from "../../types";

interface TDisclosureProps {
    content: React.ReactNode,
    defaultOpen?: boolean
}

const LightBlueDisclosure: React.FC<PropsWithChildren<TDisclosureProps>> = ({
    content,
    children,
    defaultOpen = false
}) => {
    return (
        <Disclosure defaultOpen={defaultOpen}>
            {({open}) =>
                <div className="rounded-lg overflow-hidden bg-mjol-blue-card-property">
                    <Disclosure.Button
                        className="group flex justify-between font-archivo p-5 w-full text-md
                                   font-semibold text-left"
                    >
                        {content}
                        <ChevronUpIcon className={classNames(
                            "transform duration-200 w-6 h-6 font-archivo text-gray-500 group-hover:text-black",
                            open ? "" : "rotate-180",
                        )}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-5">
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