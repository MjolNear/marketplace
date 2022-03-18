import React from 'react';

const DarkBlueGradientButton = ({title, isLoading = false, loadingText = "loading", ...props}) => {
    return (
        <button {...props} disabled={props.disabled || isLoading}
                className="w-full text-white font-bold font-archivo
                    bg-gradient-to-l from-blue-500 to-blue-800 rounded-xl px-[18px] py-[12px]
                    hover:from-blue-600
                    hover:to-blue-800
                    hover:shadow-mjol-gray-xs
                    disabled:opacity-50
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