import {Disclosure, Transition} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/solid'
import {Fragment} from "react";

export default function DropDownMjolButton({title, children}) {
    return (
        <Disclosure>
            {({open}) => (
                <>
                    <Disclosure.Button
                        className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-black bg-blue-100 rounded-lg hover:bg-blue-200">
                        <span>{title}</span>
                        <ChevronUpIcon
                            className={`${open ? 'rotate-180' : ''} transform duration-200 w-6 h-6 text-blue-500`}
                        />
                    </Disclosure.Button>
                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="opacity-0 translate-y-10"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-10"
                    >
                        {children}
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}