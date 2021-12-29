import React from 'react';

const MjolGradientButton = ({title}) => {
    return (
        <button className="px-4 py-2 rounded-lg w-full
                           bg-gradient-to-r from-light_blue to-green-200
                           text-black text-mono font-semibold
                           text-md md:text-lg
                           hover:to-light_blue hover:from-green-200
                           ">
            {title}
        </button>
    );
};

export default MjolGradientButton;