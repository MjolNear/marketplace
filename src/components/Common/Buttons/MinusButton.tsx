import React from 'react';
import {FaMinus} from 'react-icons/fa'

interface MinusButtonProps {
    onClick: React.MouseEventHandler,
    width?: number | string
    height?: number | string
}

const MinusButton: React.FC<MinusButtonProps> = ({
    onClick,
    width,
    height
}) => {
    return (
        <button className="p-3 rounded-lg ring-[1px] ring-gray-300 hover:bg-mjol-hover hover:shadow-mjol-gray
                           flex items-center justify-center"
                style={{
                    width: width || "fit-content",
                    height: height || "fit-content"
                }}
                type="button"
                onClick={onClick}
        >
            <FaMinus className="fill-gray-600 w-[16px]"/>
        </button>
    );
};

export default MinusButton;