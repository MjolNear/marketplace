import React from 'react';
import {BsQuestionCircle} from "react-icons/bs"
import ReactTooltip from "react-tooltip";

interface PropTypes {
    missedNeps?: string[]
}

const NftContractNotSupported: React.FC<PropTypes> = ({missedNeps}) => {
    return (
        <div className="inline-flex gap-2 w-full justify-center items-center
                        rounded-xl px-[24px] py-[18px] bg-mjol-blue-card-property"
        >
            <div className="font-bold font-archivo text-md text-gray-600">
                NFT contract not supported
            </div>
            <BsQuestionCircle size={15}
                              data-tip={`Missed standards: ${missedNeps?.join(', ')}`}
            />
            <ReactTooltip className='text-sm font-medium font-archivo' type='dark' place='bottom' delayShow={200}/>
        </div>
    );
};

export default NftContractNotSupported;