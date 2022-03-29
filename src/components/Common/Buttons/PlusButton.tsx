import React from 'react';
import {FaPlus} from "react-icons/fa";

interface PlusButtonProps {
    onClick: React.MouseEventHandler
}

const PlusButton: React.FC<PlusButtonProps> = ({
    onClick
}) => {
    return (
        <div>
            <button className="p-3 rounded-lg ring-[1px] ring-gray-300 hover:bg-mjol-hover hover:shadow-mjol-gray">
                <FaPlus className="fill-gray-600" onClick={onClick}/>
            </button>
        </div>
    );
};

export default PlusButton;