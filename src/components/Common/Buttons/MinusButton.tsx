import React from 'react';
import {FaMinus} from 'react-icons/fa'

interface MinusButtonProps {
    onClick: React.MouseEventHandler,
    size?: number
}

const MinusButton: React.FC<MinusButtonProps> = ({
    onClick,
    size
}) => {
    return (
        <button className="p-3 rounded-lg w-full
                           h-full ring-[1px] ring-gray-300 hover:bg-mjol-hover hover:shadow-mjol-gray
                           flex items-center justify-center"
                type="button"
                onClick={onClick}
        >
            <FaMinus className="fill-gray-600 w-[16px]"/>
        </button>
    );
};

export default MinusButton;