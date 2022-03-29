import React from 'react';
import {FaMinus} from 'react-icons/fa'

interface MinusButtonProps {
    onClick: React.MouseEventHandler
}

const MinusButton: React.FC<MinusButtonProps> = ({
    onClick
}) => {
    return (
        <button className="p-3 ml-3 rounded-lg ring-[1px] ring-gray-300 hover:bg-mjol-hover hover:shadow-mjol-gray">
            <FaMinus className="fill-gray-600 w-full" onClick={onClick}/>
        </button>
    );
};

export default MinusButton;