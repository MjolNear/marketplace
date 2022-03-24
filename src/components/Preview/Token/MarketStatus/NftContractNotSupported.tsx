import React from 'react';
import {BsPatchQuestionFill} from "react-icons/bs"
import Tooltip from "../../../Layout/Tooltip";

interface PropTypes {
    missedNeps?: string[]
}

const NftContractNotSupported: React.FC<PropTypes> = ({missedNeps}) => {
    return (
        <div className="inline-flex gap-2 w-full justify-center items-center
                        rounded-xl px-6 py-4 bg-mjol-blue-card-property"
        >
            <div className="font-bold font-archivo text-md text-gray-600">
                NFT contract not supported
            </div>
            <BsPatchQuestionFill className="fill-gray-600 cursor-pointer"
                                 data-tip={
                                     `Missed standards: ${missedNeps
                                         ? missedNeps?.join(', ')
                                         : "fetching missed NEPs"}`
                                 }
                                 data-for="missedStandardsTooltipId"
            />
            <Tooltip place="bottom" id="missedStandardsTooltipId"/>
        </div>
    );
};

export default NftContractNotSupported;