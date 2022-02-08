import React from 'react';
import {FontWeight, TextAlignment, TextSize} from "../../../utils/css-utils";

// linear-gradient(126.49deg, rgb(0, 163, 255) 0%, rgb(0, 102, 255) 100%)

export interface TextProps {
    text: string,
    size?: TextSize,
    align?: TextAlignment,
    fontWeight?: FontWeight,
    extraClasses?: string,
    style?: object
}

const GradientText = React.memo<TextProps>(({
    text,
    size = undefined,
    align = "center",
    fontWeight = "bold",
    extraClasses = '',
    style = {}
}) => {
    const textSize = `text-${size}`
    const textAlignment = `text-${align}`
    const textWeight = `font-${fontWeight}`
    return (
        <div
            className={`text-transparent bg-clip-text font-archivo ${extraClasses} ${textSize} ${textAlignment} ${textWeight}`}
            style={style}
        >
            {text}
        </div>
    );
});

export default GradientText;