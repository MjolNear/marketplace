import React from 'react';

const DarkBlueGradientButton = ({title, ...props}) => {
    return (
        <button {...props}
                className="w-full text-white font-extrabold
                           bg-gradient-to-l from-blue-500 to-blue-800 rounded-lg px-10 py-2
                           hover:from-blue-600
                           hover:to-blue-800
                           hover:shadow-mjol-gray-xs
                           disabled:opacity-50
                           disabled:cursor-not-allowed
                           "
        >
            {title}
        </button>
    )
}

export default DarkBlueGradientButton;