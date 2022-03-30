import React from 'react';
import {FaMinus} from 'react-icons/fa'
import classNames from "../../../utils/css-utils";

interface MinusButtonProps {
    onClick: React.MouseEventHandler,
    size?: number
}

const MinusButton: React.FC<MinusButtonProps> = ({
    onClick,
    size
}) => {
    return (
        <button className="p-3 rounded-lg ring-[1px] ring-gray-300 hover:bg-mjol-hover hover:shadow-mjol-gray"
                onClick={onClick}
        >
            <FaMinus className="fill-gray-600 w-[16px]"/>
        </button>
    );
};

export default MinusButton;