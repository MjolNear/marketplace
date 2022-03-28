import React from 'react';
import {ButtonProps} from "../../../Common/Buttons/ButtonProps";
import {BsCheckLg} from 'react-icons/bs'

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
                           transition-all hover:bg-mjol-hover hover:shadow-mjol-gray rounded-xl"
                {...props}
        >
            <div className="px-4 py-3 inline-flex justify-between items-center w-full">
                {text}
                {isPicked && <BsCheckLg className="fill-mjol-light-blue" size={13}/>}
            </div>
        </button>
    );
};

export default SortOption;