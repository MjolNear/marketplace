import React, {Fragment, useState} from 'react'
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import {
    ChevronDownIcon,
    ChevronLeftIcon, ChevronRightIcon,
    ChevronUpIcon,
    FilterIcon,
    MinusSmIcon,
    PlusSmIcon,
    ViewGridIcon
} from '@heroicons/react/solid'
import classNames from "../../../utils/css-utils";
import MobileFilterButton from "./Blocks/MobileFilterButton";
import OptionsPanel from "./Blocks/OptionsPanel";
import SectionDisclosure from "./Blocks/SectionDisclosure";
import {CollectionTraits} from "../../../business-logic/models/collection";

const sortOptions = [
    {name: 'Most Popular', href: '#', current: true},
    {name: 'Best Rating', href: '#', current: false},
    {name: 'Newest', href: '#', current: false},
    {name: 'Price: Low to High', href: '#', current: false},
    {name: 'Price: High to Low', href: '#', current: false},
]

const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            {value: 'white', label: 'White', checked: false},
            {value: 'beige', label: 'Beige', checked: false},
            {value: 'blue', label: 'Blue', checked: true},
            {value: 'brown', label: 'Brown', checked: false},
            {value: 'green', label: 'Green', checked: false},
            {value: 'purple', label: 'Purple', checked: false},
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            {value: 'new-arrivals', label: 'New Arrivals', checked: false},
            {value: 'sale', label: 'Sale', checked: false},
            {value: 'travel', label: 'Travel', checked: true},
            {value: 'organization', label: 'Organization', checked: false},
            {value: 'accessories', label: 'Accessories', checked: false},
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            {value: '2l', label: '2L', checked: false},
            {value: '6l', label: '6L', checked: false},
            {value: '12l', label: '12L', checked: false},
            {value: '18l', label: '18L', checked: false},
            {value: '20l', label: '20L', checked: false},
            {value: '40l', label: '40L', checked: true},
        ],
    },
    {
        id: 'size1',
        name: 'Size',
        options: [
            {value: '2l', label: '2L', checked: false},
            {value: '6l', label: '6L', checked: false},
            {value: '12l', label: '12L', checked: false},
            {value: '18l', label: '18L', checked: false},
            {value: '20l', label: '20L', checked: false},
            {value: '40l', label: '40L', checked: true},
        ],
    },
    {
        id: 'size6',
        name: 'Size',
        options: [
            {value: '2l', label: '2L', checked: false},
            {value: '6l', label: '6L', checked: false},
            {value: '12l', label: '12L', checked: false},
            {value: '18l', label: '18L', checked: false},
            {value: '20l', label: '20L', checked: false},
            {value: '40l', label: '40L', checked: true},
        ],
    },
    {
        id: 'size900',
        name: 'Size',
        options: [
            {value: '2l', label: '2L', checked: false},
            {value: '6l', label: '6L', checked: false},
            {value: '12l', label: '12L', checked: false},
            {value: '18l', label: '18L', checked: false},
            {value: '20l', label: '20L', checked: false},
            {value: '40l', label: '40L', checked: true},
        ],
    },
    {
        id: 'size7',
        name: 'Size',
        options: [
            {value: '2l', label: '2L', checked: false},
            {value: '6l', label: '6L', checked: false},
            {value: '12l', label: '12L', checked: false},
            {value: '18l', label: '18L', checked: false},
            {value: '20l', label: '20L', checked: false},
            {value: '40l', label: '40L', checked: true},
        ],
    },
    {
        id: 'size8',
        name: 'Size',
        options: [
            {value: '2l', label: '2L', checked: false},
            {value: '6l', label: '6L', checked: false},
            {value: '12l', label: '12L', checked: false},
            {value: '18l', label: '18L', checked: false},
            {value: '20l', label: '20L', checked: false},
            {value: '40l', label: '40L', checked: true},
        ],
    },
    {
        id: 'size9',
        name: 'Size',
        options: [
            {value: '2l', label: '2L', checked: false},
            {value: '6l', label: '6L', checked: false},
            {value: '12l', label: '12L', checked: false},
            {value: '18l', label: '18L', checked: false},
            {value: '20l', label: '20L', checked: false},
            {value: '40l', label: '40L', checked: true},
        ],
    },
    {
        id: 'size10',
        name: 'Size',
        options: [
            {value: '2l', label: '2L', checked: false},
            {value: '6l', label: '6L', checked: false},
            {value: '12l', label: '12L', checked: false},
            {value: '18l', label: '18L', checked: false},
            {value: '20l', label: '20L', checked: false},
            {value: '40l', label: '40L', checked: true},
        ],
    },
]

interface PropTypes {
    traits: CollectionTraits
}

const TraitsFilter: React.FC<PropTypes> = ({children, traits}) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [filtersIsHidden, setFiltersIsHidden] = useState(false)

    return (
        <div className="bg-white">
            <div>


                {/* Mobile filter dialog */}

                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25"/>
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div
                                className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                <div className="px-4 flex items-center justify-between">
                                    <h2 className="text-lg font-medium text-gray-900">Traits</h2>
                                    <button
                                        type="button"
                                        className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>

                                {/* Filters */}
                                <form className="mt-4 border-t border-gray-200">
                                    {Object.entries(traits).map(([name, values]) => (
                                        <Disclosure as="div"
                                                    key={name}
                                                    className="border-t border-gray-200 px-4 py-6">
                                            {({open}) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button
                                                            className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                            <span
                                                                className="font-medium text-gray-900">{name}</span>
                                                            <span className="ml-6 flex items-center">
                                {open
                                    ? <ChevronUpIcon className="h-5 w-5" aria-hidden="true"/>
                                    : <ChevronDownIcon className="h-5 w-5" aria-hidden="true"/>
                                }
                              </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <OptionsPanel values={values}/>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>


                <div className="pl-4 sm:pl-6 md:pl-8">
                    <MobileFilterButton onClick={() => setMobileFiltersOpen(true)}/>
                    <div className="flex flex-row pb-24 gap-2">
                        <div>
                            <button onClick={() => setFiltersIsHidden(!filtersIsHidden)}
                                    className="hidden md:block w-full"
                            >
                                {
                                    filtersIsHidden
                                        ? <ChevronRightIcon className="w-6 h-6"/>
                                        : <div className="inline-flex justify-between w-full">
                                            Filters
                                            <ChevronLeftIcon className="w-6 h-6"/>
                                        </div>
                                }
                            </button>
                            {!filtersIsHidden && <form className="hidden md:block min-w-[340px]">
                                {
                                    Object.entries(traits)
                                        .map(([name, values]) => (
                                            <Disclosure as="div"
                                                        key={name}
                                                        className="border-b border-gray-200 py-6 w-full">
                                                {({open}) => (
                                                    <>
                                                        <SectionDisclosure name={name} open={open}/>
                                                        <OptionsPanel values={values}/>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                            </form>
                            }
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TraitsFilter