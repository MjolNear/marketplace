import React from 'react';
import GradientText, {TextProps} from "./GradientText";

const LightBlueGradientText = React.memo<TextProps>(({
    text,
    size,
    align,
    fontWeight,
    extraClasses,
}) => {
    return (
        <GradientText text={text}
                      size={size}
                      align={align}
                      fontWeight={fontWeight}
                      extraClasses={extraClasses}
                      style={{
                          backgroundImage: "linear-gradient(126.49deg, rgb(0, 163, 255) 0%, rgb(0, 102, 255) 100%)"
                      }}/>
    );
});

export default LightBlueGradientText;