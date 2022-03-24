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
        <button className="font-bold font-archivo text-black text-sm text-left w-full py-[12px] px-[16px]
                           inline-flex justify-between items-center hover:bg-gray-200 rounded-xl"
                {...props}
        >
            {text}
            {isPicked && <BsCheckLg className="fill-mjol-light-blue" size={13}/>}
        </button>
    );
};

export default SortOption;