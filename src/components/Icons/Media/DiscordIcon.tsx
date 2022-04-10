import React from 'react';
import {FaDiscord} from "react-icons/fa";
import {IconProps} from "../IconProps";

const DiscordIcon: React.FC<IconProps> = ({
    size=20
}) => {
    return (
        <FaDiscord size={size} color="#5865F2"/>
    );
};

export default DiscordIcon;