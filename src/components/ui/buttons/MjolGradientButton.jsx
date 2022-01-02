import React from 'react';

const MjolGradientButton = ({children, ...props}) => {
    return (
        <button {...props} className="px-4 py-2 rounded-lg w-full
                           bg-gray-900
                           text-indigo-200 text-mono font-semibold
                           text-md md:text-lg
                           hover:to-light_blue hover:from-green-200
                           ">
            {children}
        </button>
    );
};

export default MjolGradientButton;