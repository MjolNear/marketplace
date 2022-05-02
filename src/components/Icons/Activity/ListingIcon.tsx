import React from 'react';
import {IconProps} from "../IconProps";
import {IoPricetag} from 'react-icons/io5'


const ListingIcon = React.memo<IconProps>(({size, fill}) => {
    return <IoPricetag size={size} className={fill}/>
});

export default ListingIcon;