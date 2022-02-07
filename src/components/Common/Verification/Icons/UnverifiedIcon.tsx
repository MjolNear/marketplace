import React from 'react';
import {GoUnverified} from "react-icons/go";
import {IconProps} from "../../../Icons/IconProps";

const UnverifiedIcon = React.memo<IconProps>(({size = 15}) => {
    return <GoUnverified size={size} color=""/>
});

export default UnverifiedIcon;