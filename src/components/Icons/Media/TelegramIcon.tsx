import React from 'react';
import {IconProps} from "../IconProps";
import {FaTelegram} from "react-icons/fa";


const TelegramIcon: React.FC<IconProps> = ({
    size = 20,
}) => {
    return (
        <FaTelegram size={size} color="#2AABEE"/>
    );
};

export default TelegramIcon;