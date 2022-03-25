import React from 'react';
import {ButtonProps, ColoredButtonProps} from "./ButtonProps";
import BaseButton from "./BaseButton";


const DarkBlueGradientButton: React.FC<ColoredButtonProps> = (props) => {
    return (
        <BaseButton {...props}
                    fontWeight="extrabold"
                    fromColor="from-blue-500"
                    toColor="to-blue-800"
                    hoverFromColor="hover:from-blue-600"
                    hoverToColor="hover:to-blue-900"
                    disabledStyles="disabled:hover:from-blue-500 disabled:hover:to-blue-800"
        />
    )
}

export default DarkBlueGradientButton;