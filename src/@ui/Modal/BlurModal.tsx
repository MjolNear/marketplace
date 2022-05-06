import React, {Fragment} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {XIcon} from "@heroicons/react/solid";

interface BlurModalProps {
    isOpen: boolean,
    close: () => void
}

const BlurModal: React.FC<BlurModalProps> = ({
    isOpen,
    close,
    children
}) => {

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-[150]" onClose={close}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-300"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl"/>
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300"
                        enterFrom="transform opacity-0 translate-y-full"
                        enterTo="transform opacity-300 translate-y-0"
                        leave="transition ease-in-out duration-100"
                        leaveFrom="transform opacity-300 translate-y-0"
                        leaveTo="transform opacity-0 translate-y-full"
                    >
                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex justify-center items-end sm:items-center min-h-full sm:p-5">
                                <Dialog.Panel
                                    className="w-full sm:w-fit
                                               transform rounded-t-2xl sm:rounded-b-2xl bg-white
                                               p-4 text-left transition-all"
                                >
                                    <div className="w-full flex justify-end">
                                        <button type="button" onClick={close}
                                                className="p-1 hover:bg-gray-100 rounded-full">
                                            <XIcon height={20} width={20}/>
                                        </button>
                                    </div>
                                    <div className="w-full h-full">
                                        {children}
                                    </div>
                                </Dialog.Panel>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
};

export default BlurModal;