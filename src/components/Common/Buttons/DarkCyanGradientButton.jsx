import React from 'react';

const DarkCyanGradientButton = ({title, ...props}) => {
    return (
        <button {...props}
                className="w-full text-white font-bold font-archivo
                           bg-gradient-to-r from-gray-900 to-cyan-600 rounded-xl px-[18px] py-3
                           hover:from-gray-800
                           hover:to-cyan-700
                           hover:shadow-mjol-gray-xs
                           disabled:opacity-50
                           disabled:drop-shadow-none
                           disabled:cursor-not-allowed"
        >
            {title}
        </button>
    );
};

export default DarkCyanGradientButton;