import React from 'react';
import {BsCheckLg} from 'react-icons/bs'
import {ButtonProps} from "../../../../@ui/Buttons/ButtonProps";

interface SortOptionProps {
    text: string,
    isPicked: boolean,
}

const SortOption: React.FC<SortOptionProps & ButtonProps> = ({
    text,
    isPicked,
    ...props
}) => {
    return (
        <button className="font-bold font-archivo text-black text-[14px] text-left w-full
                           transition-all hover:bg-mjol-hover hover:shadow-mjol-gray"
                {...props}
        >
            <div className="px-5 py-[14px] inline-flex justify-between items-center w-full">
                {text}
                {isPicked && <BsCheckLg className="fill-mjol-light-blue" size={13}/>}
            </div>
        </button>
    );
};

export default SortOption;