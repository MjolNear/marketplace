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
        <div className="flex flex-row justify-between">
            <div className="font-semibold font-archivo">
                {name}
            </div>
            {tooltip
                ?
                <p className="cursor-pointer"
                   data-tip="copy"
                   data-html={true}
                   onClick={() => {
                       navigator.clipboard.writeText(value).then()
                   }}
                >
                    {shrinkValue}
                </p>
                :
                <p className="font-archivo">{shrinkValue}</p>
            }
            {tooltip && <ReactTooltip type="dark"
                                      place="bottom"
                                      delayShow={50}/>
            }
        </div>
    );
});

export default PreviewAttribute;