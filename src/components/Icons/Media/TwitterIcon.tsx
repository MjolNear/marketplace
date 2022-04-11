import React from 'react';
import {IconProps} from "../IconProps";
import {FaTwitter} from "react-icons/fa";

const TwitterIcon: React.FC<IconProps> = ({
    size = 20
}) => {
    return (
        <FaTwitter size={size} className="fill-blue-500"/>
    );
};

export default TwitterIcon;