import React from 'react';
import {FaPlus} from "react-icons/fa";

interface PlusButtonProps {
    onClick: React.MouseEventHandler
}

const PlusButton: React.FC<PlusButtonProps> = ({
    onClick
}) => {
    return (
        <button className="p-3 rounded-lg w-full
                           h-full ring-[1px] ring-gray-300 hover:bg-mjol-hover hover:shadow-mjol-gray
                           flex items-center justify-center"
                type="button"
                onClick={onClick}>
            <FaPlus className="fill-gray-600"/>
        </button>
    );
};

export default PlusButton;