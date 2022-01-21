import React from 'react';
import logo from "../../../resources/logo-white.svg";

interface SizeProps {
    size: number | string
}

const WhiteNearIcon: React.FC<SizeProps> = ({size = 16}) => {
    return (
        <img src={logo}
             alt="near"
             width={size}
             height={size}
        />
    )
};

export default WhiteNearIcon;