import {Disclosure, Transition} from "@headlessui/react";
import React, {useState} from "react";
import Hr from "../Borders/Hr";
import {ChevronUpIcon} from "@heroicons/react/solid";
import classNames from "../../../utils/css-utils";


export default function DropDownMjolBlueButton({buttonContent, children}) {
    return (
        <Disclosure>
            {({open}) => (
                <div>
                    <Disclosure.Button
                        className={classNames(
                            "group flex justify-between font-archivo p-5 w-full text-md font-semibold text-left bg-mjol-blue-card-property",
                            open ? "rounded-t-lg" : "rounded-lg"
                        )}>
                        {buttonContent}
                        <ChevronUpIcon className={classNames(
                            "transform duration-200 w-6 h-6 font-archivo text-gray-500 group-hover:text-black",
                            open ? "" : "rotate-180",
                        )}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                        <div className="px-5 bg-mjol-blue-card-property">
                            <Hr color="bg-gray-600"/>
                        </div>
                        {children}
                    </Disclosure.Panel>
                </div>)}
        </Disclosure>
    )
}