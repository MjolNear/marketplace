import React from 'react';
import logo from '../../../resources/near-protocol-near-logo.svg'
import {IconProps} from "../IconProps";


const NearBlackLogo = React.memo<IconProps>(({size = 15, fill}) => {
    return <img width={size} height={size} src={logo} alt="near" style={{fill}}/>
});

export default NearBlackLogo;