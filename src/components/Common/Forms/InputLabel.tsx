import React, {memo} from 'react';
import {TextSize} from "../../../utils/css-utils";

interface RequiredFiledLabelProps {
    label: string | React.ReactNode,
    labelTooltip?: React.ReactNode
    description?: string | React.ReactNode,
    descriptionTooltip?: React.ReactNode,
    textSize?: TextSize,
    required?: boolean
}

const InputLabel: React.FC<RequiredFiledLabelProps> = ({
    label,
    labelTooltip,
    description,
    descriptionTooltip,
    textSize = "md",
    required
}) => {
    const textStyle = `text-${textSize}`
    return (
        <span className="flex flex-col font-archivo font-semibold mb-2 space-y-1">
            <span className={`${textStyle} inline-flex gap-1 items-center`}>
                {required && <b className="text-red-500 font-black">*</b>}
                {label}
                {labelTooltip}
            </span>
            {description &&
                <span className="text-xs-2 text-gray-600 inline-flex items-center gap-1">
                    {description}
                    {descriptionTooltip}
                </span>
            }
        </span>
    );
};

export default memo(InputLabel);