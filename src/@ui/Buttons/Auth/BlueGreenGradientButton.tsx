import React, {MouseEventHandler} from 'react';

interface PropTypes {
    title: string
    onClick: MouseEventHandler
}

const BlueGreenGradientButton: React.FC<PropTypes> =({title, onClick}) => {
    return (
        <button onClick={onClick}
                className="w-full py-[10px] my-[20px] font-bold text-md rounded-md text-white bg-gradient-to-br from-mjol-blue-base to-green-200 hover:from-green-200 hover:to-mjol-blue-base"
        >
            {title}
        </button>
    );
};

export default BlueGreenGradientButton;