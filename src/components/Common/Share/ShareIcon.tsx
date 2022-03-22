import React from 'react';
import {IconProps} from "../../Icons/IconProps";
import {BsShareFill} from "react-icons/bs";


const ShareIcon: React.FC<IconProps> = ({
    size,
    fill = 'blue-500'
}) => {
    return (
        <BsShareFill size={size} className="fill-gray-600 hover:fill-black"/>
    )
};

export default ShareIcon;