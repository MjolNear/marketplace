import React from 'react';
import {FaPlus} from "react-icons/fa";

interface PlusButtonProps {
    onClick: React.MouseEventHandler,
    text?: string
    width?: number | string
    height?: number | string
}

const PlusButton: React.FC<PlusButtonProps> = ({
    onClick,
    width,
    height,
    text
}) => {
    return (
        <button className="p-3 rounded-lg ring-[1px] ring-gray-300 hover:bg-mjol-hover hover:shadow-mjol-gray
                           flex items-center justify-center"
                style={{
                    width: width || "fit-content",
                    height: height || "fit-content"
                }}
                type="button"
                onClick={onClick}>
            <div className="inline-flex gap-3 items-center w-fit">
                {text &&
                    <span className="font-archivo font-semibold text-gray-600 text-[15px]">
                        {text}
                    </span>
                }
                <FaPlus className="fill-gray-600"/>
            </div>
        </button>
    );
};

export default PlusButton;