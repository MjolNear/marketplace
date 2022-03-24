import React from 'react';
import {BiCopy} from 'react-icons/bi'
import {IconProps} from "./IconProps";

const CopyIcon = React.memo<IconProps>(({size, fill}) => {
    return <BiCopy size={size} className={fill}/>
})

export default CopyIcon;