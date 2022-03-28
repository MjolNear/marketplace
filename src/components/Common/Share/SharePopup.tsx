import {Popover, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import ShareIcon from "./ShareIcon";
import ShareBox from "./ShareBox";
import {TShareProps} from "./TShareProps";
import Tooltip from "../../Layout/Tooltip";


const SharePopup: React.FC<TShareProps> = ({
    link,
}) => {
    return (
        <Popover className="relative">
            <p data-for="shareTokenTooltipId"
               data-tip="Share"
               className="cursor-pointer"
            >
                <Popover.Button>
                    <ShareIcon size={20}/>
                </Popover.Button>
                <Tooltip id="shareTokenTooltipId" place="top"/>
            </p>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Popover.Panel className="absolute right-0 mt-3">
                    {({close}) => (
                        <ShareBox link={link} close={close}/>
                    )}
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default SharePopup;