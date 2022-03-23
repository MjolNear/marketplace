import React from 'react';
import {Disclosure} from "@headlessui/react";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/solid";
import IconText from "../../../../Icons/IconText";
import {BsList} from "react-icons/bs";

interface PropTypes {
    name: string
    open: boolean
}

const SectionDisclosure = React.memo<PropTypes>(({name, open}) => {
    return (
        <div className="-my-3">
            <Disclosure.Button className="py-3 bg-white w-full
                                         inline-flex justify-between text-sm
                                         text-gray-400 hover:text-black"
            >
                <IconText className="font-semibold text-gray-900 font-archivo" text={name} icon={<BsList/>}/>
                {open
                    ? <ChevronUpIcon className="h-5 w-5" aria-hidden="true"/>
                    : <ChevronDownIcon className="h-5 w-5" aria-hidden="true"/>
                }
            </Disclosure.Button>
        </div>
    );
});

export default SectionDisclosure;