import {Transition} from '@headlessui/react'
import {Fragment} from 'react'

export default function GrayModal({visible, children}) {
    return (
        <Transition appear
                    show={visible}
                    as={Fragment}
                    enter="ease-out duration-100"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
        >
            <div className="w-screen h-screen fixed inset-0 bg-opacity-60 bg-black z-10
                            overflow-y-auto grid items-center justify-center"
            >
                {children}
            </div>
        </Transition>
    )
}