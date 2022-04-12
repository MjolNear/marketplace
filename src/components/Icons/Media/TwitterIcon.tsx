import React from 'react';
import {IconProps} from "../IconProps";
import {FaTwitter} from "react-icons/fa";

const TwitterIcon: React.FC<IconProps> = ({
    size = 20,
    fill = "fill-blue-500"
}) => {
    return (
        <FaTwitter size={size} className={fill}/>
    );
};

export default TwitterIcon;