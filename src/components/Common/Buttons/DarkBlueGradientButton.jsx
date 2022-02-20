import React from 'react';

const DarkBlueGradientButton = ({title, ...props}) => {
    return (
        <button {...props}
                className="w-full text-white font-bold font-archivo
                           bg-gradient-to-l from-blue-500 to-blue-800 rounded-xl px-[18px] py-[12px]
                           hover:from-blue-600
                           hover:to-blue-800
                           hover:shadow-mjol-gray-xs
                           disabled:opacity-50
                           disabled:cursor-not-allowed"
        >
            {title}
        </button>
    )
}

export default DarkBlueGradientButton;