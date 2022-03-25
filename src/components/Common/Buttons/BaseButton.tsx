import React from 'react';
import {ButtonProps} from "./ButtonProps";
import {TextProps} from "../Text/GradientText";

interface GradientButtonsProps {
    title: string
    isLoading?: boolean
    loadingText?: string
    textColor?: string
    bgColor?: string,
    shadow?: string,
    fromColor?: string,
    toColor?: string,
    hoverFromColor?: string,
    hoverToColor?: string,
    disabledStyles?: string
    rounded?: string,
    width?: string
    px?: number,
    py?: number
}

const BaseButton: React.FC<GradientButtonsProps & ButtonProps & Omit<TextProps, 'text' | 'extraClasses'>> = ({
    title,
    isLoading,
    loadingText,
    disabled,
    size = undefined,
    fromColor = "black",
    toColor = "black",
    hoverToColor,
    hoverFromColor,
    disabledStyles,
    bgColor = "bg-gradient-to-l",
    align = "center",
    fontWeight = "bold",
    textColor = "white",
    shadow = "drop-shadow-xl",
    rounded = "xl",
    width = "w-full",
    px = 18,
    py = 12,
    ...props
}) => {
    const paddings = `px-[${px}px] py-[${py}px]`
    const textColorStyle = `text-${textColor}`
    const hoverShadow = `hover:${shadow}`
    const textSize = `text-${size}`
    const textAlignment = `text-${align}`
    const textWeight = `font-${fontWeight}`
    const roundedStyle = `rounded-${rounded}`

    return (
        <button disabled={disabled || isLoading}
                className={
                    `font-archivo disabled:opacity-60 disabled:hover:drop-shadow-none disabled:cursor-not-allowed 
                 ${paddings} ${bgColor} ${hoverShadow} ${textColorStyle} ${textSize} ${textAlignment}
                 ${textWeight} ${width} ${roundedStyle} ${fromColor} ${toColor} ${hoverFromColor} ${hoverToColor}
                 ${disabledStyles}`
                }
                {...props}
        >
            {isLoading
                ? <i className="fa fa-circle-o-notch fa-spin"/>
                : <>{title}</>
            }
        </button>
    );
};

export default BaseButton;