import React, {memo} from 'react';
import {TextSize} from "../../../utils/css-utils";

interface RequiredFiledLabelProps {
    label: string | React.ReactNode,
    description?: string | React.ReactNode,
    tooltip?: React.ReactNode
    textSize?: TextSize,
    required?: boolean
}

const InputLabel: React.FC<RequiredFiledLabelProps> = ({
    label,
    description,
    tooltip,
    textSize = "md",
    required
}) => {
    const textStyle = `text-${textSize}`
    return (
        <span className="flex flex-col font-archivo font-semibold mb-2 space-y-1">
            <span className={`${textStyle}`}>
                {required && <b className="text-red-500 font-black">*</b>}
                {label}
            </span>
            {description &&
                <span className="text-xs-2 text-gray-600 inline-flex items-center gap-1">
                    {description}
                    {tooltip}
                </span>
            }
        </span>
    );
};

export default memo(InputLabel);