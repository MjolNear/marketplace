import React from 'react';
import {ColoredButtonProps} from "./ButtonProps";
import BaseButton from "./BaseButton";


const DarkBlueButton: React.FC<ColoredButtonProps> = (props) => {
    return (
        <BaseButton {...props}
                    fontWeight="extrabold"
                    fromColor="from-blue-500"
                    toColor="to-gray-800"
                    hoverFromColor="hover:from-blue-600"
                    hoverToColor="hover:to-gray-900"
                    disabledStyles="disabled:hover:from-blue-500 disabled:hover:to-gray-800"
        />
    )
};

export default DarkBlueButton;