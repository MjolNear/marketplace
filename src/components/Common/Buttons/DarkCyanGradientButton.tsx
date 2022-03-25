import React from 'react';
import {ColoredButtonProps} from "./ButtonProps";
import BaseButton from "./BaseButton";


const DarkCyanGradientButton: React.FC<ColoredButtonProps> = (props) => {
    return (
        <BaseButton {...props}
                    fontWeight="extrabold"
                    fromColor="from-cyan-300"
                    toColor="to-cyan-400"
                    hoverFromColor="hover:from-cyan-500"
                    hoverToColor="hover:to-cyan-500"
                    disabledStyles="disabled:hover:from-cyan-300 disabled:hover:to-cyan-500"
        />
    )
};

export default DarkCyanGradientButton;