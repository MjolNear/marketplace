import React from 'react';
import {BsQuestionCircle} from "react-icons/bs"
import ReactTooltip from "react-tooltip";

interface PropTypes {
    missedNeps: string[]
}

const NftContractNotSupported: React.FC<PropTypes> = ({missedNeps}) => {
    return (
        <div
            className="inline-flex gap-2 w-full items-center justify-center rounded-lg bg-blue-100 py-4 font-semibold text-md text-black font-archivo">
            NFT contract not supported
            <BsQuestionCircle size={16}
                              className="cursor-pointer"
                              data-tip={`Missed standards: ${missedNeps.join(', ')}`}
            />
            <ReactTooltip className='text-sm font-medium font-archivo' type='dark' place='bottom' delayShow={200}/>
        </div>
    );
};

export default NftContractNotSupported;