import React from 'react';
import {ButtonProps} from "./ButtonProps";

interface BlueButtonProps {
    title: string
}

type Props = ButtonProps & BlueButtonProps

const BlueButton: React.FC<Props> = ({title, ...props}) => {
    return (
        <button className="h-full w-full text-white rounded-2xl px-[20px] py-[8px] font-archivo font-semibold
                           bg-gradient-to-l from-blue-500 to-blue-800 rounded-lg
                           hover:from-blue-600
                           hover:to-blue-800
                           disabled:hover:from-blue-500
                           disabled:hover:to-blue-800
                           disabled:opacity-50"
                {...props}
        >
            {title}
        </button>
    );
};

export default BlueButton;