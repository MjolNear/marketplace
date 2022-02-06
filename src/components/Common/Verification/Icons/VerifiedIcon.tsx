import React from 'react';
import {GoVerified} from "react-icons/go";
import {IconProps} from "../../../Icons/IconProps";

const VerifiedIcon = React.memo<IconProps>(({size = 15}) => {
    return <GoVerified size={size} color="rgb(0, 163, 255)"/>
});

export default VerifiedIcon;