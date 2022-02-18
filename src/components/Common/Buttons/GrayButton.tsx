import {Menu} from '@headlessui/react';
import React from 'react';
import {ButtonProps} from "./ButtonProps";

interface GrayButtonProps {
    title: string
}

type Props = ButtonProps & GrayButtonProps

const GrayButton: React.FC<Props> = ({title, ...props}) => {
    return (
        <button className="h-full w-full rounded-2xl px-[20px] py-[8px] font-archivo font-semibold
                           bg-gray-200 text-black
                           hover:bg-gray-300
                           disabled:hover:bg-ray-200
                           disabled:opacity-50
                           "
                     {...props}
        >
            {title}
        </button>
    );
};

export default GrayButton;