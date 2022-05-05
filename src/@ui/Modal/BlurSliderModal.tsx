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
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xl"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="flex justify-end p-5 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-out duration-300"
                                enterFrom="transform translate-x-[50px]"
                                enterTo="transform translate-x-0"
                                leave="transition ease-in duration-300"
                                leaveFrom="transform translate-x-0"
                                leaveTo="transform translate-x-full"
                            >
                                <Dialog.Panel
                                    className="w-[400px] transform overflow-hidden rounded-2xl bg-white
                                               p-4 text-left transition-all shadow-2xl"
                                >
                                    <div className="w-full flex justify-end">
                                        <button type="button" onClick={close} className="p-1 hover:bg-gray-100 rounded-full">
                                            <XIcon height={20} width={20}/>
                                        </button>
                                    </div>
                                    <div className="px-4 pt-2 pb-10 w-full h-full">
                                        {children}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
};

export default BlurSliderModal;