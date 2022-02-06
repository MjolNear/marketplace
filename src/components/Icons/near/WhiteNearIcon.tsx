import React from 'react';
import logo from "../../../resources/logo-white.svg";
import {IconProps} from "../IconProps";

const WhiteNearIcon: React.FC<IconProps> = React.memo(({size = 16}) => {
    return (
        <img src={logo}
             alt="near"
             width={size}
             height={size}
        />
    )
});

export default WhiteNearIcon;