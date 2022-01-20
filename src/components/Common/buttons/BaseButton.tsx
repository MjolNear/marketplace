import React, {MouseEventHandler} from 'react';
import {combineStyles, Rounded} from "../Styles";

interface BaseButtonProps {
    onClick: MouseEventHandler
    rounded: Rounded
}

const BaseButton: React.FC<BaseButtonProps> = ({
    onClick,
    rounded = 'x'
}) => {
    return (
        <button onClick={onClick}
                // className={combineStyles(rounded)}
        >

        </button>
    );
};

export default BaseButton;