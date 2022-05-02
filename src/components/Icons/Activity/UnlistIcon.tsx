import React from 'react';
import {MdRemoveShoppingCart} from "react-icons/md";
import {IconProps} from "../IconProps";

const UnlistIcon = React.memo<IconProps>(({size, fill}) => {
    return <MdRemoveShoppingCart size={size} className={fill}/>
});

export default UnlistIcon;