import React from 'react';
import {render} from 'react-dom'
import ReactTooltip from 'react-tooltip';
import {shortenString} from "../../../../utils/string";
import {TAttribute} from "./AttributeProps";
import {copiedToast} from "../../../Layout/Toast";
import Tooltip from "../../../Layout/Tooltip";

const PreviewAttribute = React.memo<TAttribute>(({
    name,
    value,
    tooltip
}) => {
    const shrinkValue = shortenString(value, 8, 20)

    return (
        <div className="flex flex-row justify-between font-archivo">
            <div className="font-semibold">
                {name}
            </div>
            {tooltip
                ?
                <p className="cursor-pointer"
                   data-tip="Copy"
                   data-for={`preview-token-copy:${name}:${value}`}
                   onClick={() => {
                       navigator.clipboard.writeText(value)
                           .then(() => copiedToast("Copied successfully"))
                   }}
                >
                    {shrinkValue}
                </p>
                :
                <>{shrinkValue}</>
            }
            {tooltip && <Tooltip id={`preview-token-copy:${name}:${value}`}/>}
        </div>
    );
});

export default PreviewAttribute;