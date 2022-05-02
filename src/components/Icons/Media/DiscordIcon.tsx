import React from 'react';
import {FaDiscord} from "react-icons/fa";
import {IconProps} from "../IconProps";

const DiscordIcon: React.FC<IconProps> = ({
    size = 20,
    fill = "#5865F2"
}) => {
    return (
        <FaDiscord size={size} color={fill}/>
    );
};

export default DiscordIcon;