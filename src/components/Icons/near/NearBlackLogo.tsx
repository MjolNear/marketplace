import React from 'react';
import logo from '../../../resources/near-protocol-near-logo.svg'

interface PropTypes {
    size?: number
}

const NearBlackLogo = React.memo<PropTypes>(({size = 15}) => {
    return <img width={size} height={size} src={logo} alt="near"/>
});

export default NearBlackLogo;