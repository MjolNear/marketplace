import React from 'react';
import {ButtonProps} from "./ButtonProps";


interface GradientButtonProps {
    title: string
    isLoading?: boolean
}

const DarkCyanGradientButton: React.FC<GradientButtonProps & ButtonProps> = ({
    title,
    isLoading = false,
    ...props
}) => {
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