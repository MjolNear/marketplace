import React from 'react';
import BlueGreenBorder from "../gradients/borders/BlueGreenBorder";

const NotFoundBlueText = ({text}) => {
    return (
        <BlueGreenBorder>
            {text}
        </BlueGreenBorder>
    );
};

export default NotFoundBlueText;