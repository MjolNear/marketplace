import React from 'react';

const DarkCyanGradientButton = ({title, ...props}) => {
    return (
        <button {...props}
                className="w-full text-white font-bold font-archivo
                           bg-gradient-to-l from-cyan-300 to-cyan-400 rounded-xl px-[18px] py-[12px]
                           hover:from-cyan-500
                           hover:to-cyan-200
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