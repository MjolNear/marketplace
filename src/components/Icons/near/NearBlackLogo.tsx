import React from 'react';
import logo from '../../../resources/near-protocol-near-logo.svg'
import {IconProps} from "../IconProps";


const NearBlackLogo = React.memo<IconProps>(({size = 15}) => {
    return <img width={size} height={size} src={logo} alt="near"/>
});

export default NearBlackLogo;