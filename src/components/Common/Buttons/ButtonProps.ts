import React from "react";

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export type ColoredButtonProps = {
    title: string
    isLoading?: boolean
    loadingText?: string
    px?: number
    py?: number
} & ButtonProps