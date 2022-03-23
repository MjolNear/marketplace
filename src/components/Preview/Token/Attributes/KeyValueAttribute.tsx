import React from 'react';
import ReactTooltip from 'react-tooltip';
import {shortenString} from "../../../../utils/string";
import {TAttribute} from "./AttributeProps";

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
                   data-tip="copy"
                   onClick={() => {
                       navigator.clipboard.writeText(value).then()
                   }}
                >
                    {shrinkValue}
                </p>
                :
                <>{shrinkValue}</>
            }
            {tooltip && <ReactTooltip type="dark"
                                      place="bottom"
                                      delayShow={50}/>
            }
        </div>
    );
});

export default PreviewAttribute;