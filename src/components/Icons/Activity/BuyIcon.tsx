import React from 'react';
import {MdShoppingCart} from "react-icons/md";
import {IconProps} from "../IconProps";

const BuyIcon = React.memo<IconProps>(({size, fill}) => {
    return <MdShoppingCart size={size} className={fill}/>
});

export default BuyIcon;