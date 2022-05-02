import React from 'react';
import {IconProps} from "../IconProps";
import {FaTelegram} from "react-icons/fa";


const TelegramIcon: React.FC<IconProps> = ({
    size = 20,
    fill= "#2AABEE"
}) => {
    return (
        <FaTelegram size={size} color={fill}/>
    );
};

export default TelegramIcon;