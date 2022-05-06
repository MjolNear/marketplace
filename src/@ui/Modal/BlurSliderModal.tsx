import React, {Fragment} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {XIcon} from "@heroicons/react/solid";

interface BlurSliderProps {
    isOpen: boolean,
    close: () => void
}

const BlurSliderModal: React.FC<BlurSliderProps> = ({
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
                        enter="ease-in duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 background-blur"/>
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-out duration-300"
                        enterFrom="transform opacity-0 translate-x-[400px]"
                        enterTo="transform opacity-100 translate-x-0"
                        leave="transition ease-in duration-300"
                        leaveFrom="transform opacity-100 translate-x-0"
                        leaveTo="transform opacity-0 translate-x-[400px]"
                    >
                        <div className="fixed inset-0 overflow-hidden">
                            <div className="flex justify-end p-5 text-center">

                                <Dialog.Panel
                                    className="w-[350px] overflow-hidden rounded-2xl bg-white
                                               p-4 text-left shadow-2xl"
                                >
                                    <div className="w-full flex justify-end">
                                        <button type="button" onClick={close}
                                                className="p-1 hover:bg-gray-100 rounded-full">
                                            <XIcon height={20} width={20}/>
                                        </button>
                                    </div>
                                    <div className="px-4 pt-2 pb-10 w-full h-full">
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

export default BlurSliderModal;