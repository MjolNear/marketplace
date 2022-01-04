import React from 'react';
import {shortenString} from "../../../../utils/string";
import ReactTooltip from 'react-tooltip';

const PreviewAttribute = ({name, value}) => {
    let shrinkValue = shortenString(value)
    return (
        <div className="flex flex-row justify-between">
            <div className="font-semibold">{name}</div>
            <p className="cursor-pointer"
               data-tip={value}
               onClick={() => navigator.clipboard.writeText(value)}
            >
                {shrinkValue}
            </p>
            <ReactTooltip className='text-sm' type='dark' place='bottom' delayShow={200}/>
        </div>
    );
};

export default PreviewAttribute;