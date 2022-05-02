import React from 'react';
import {ButtonProps} from "./ButtonProps";

interface GradientButtonProps {
    title: string
    isLoading?: boolean
    loadingText?: string
}

const DarkBlueGradientButton: React.FC<GradientButtonProps & ButtonProps> = ({
    title,
    isLoading = false,
    loadingText = "loading",
    ...props
}) => {
    return (
        <button {...props} disabled={props.disabled || isLoading}
                className="w-full text-white font-bold font-archivo
                    bg-gradient-to-l from-blue-500 to-blue-800 rounded-xl px-[18px] py-[12px]
                    hover:from-blue-600
                    hover:to-blue-800
                    hover:shadow-mjol-gray-xs
                    disabled:opacity-50
                    disabled:hover:from-blue-500
                    disabled:hover:to-blue-800
                    disabled:cursor-not-allowed"
        >
            {isLoading
                ? <i className="fa fa-circle-o-notch fa-spin"/>
                : <>{title}</>
            }
        </button>
    )
}

export default DarkBlueGradientButton;