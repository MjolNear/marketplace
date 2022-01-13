import React from 'react';
import logo from '../../../../resources/near-protocol-near-logo.svg'

const NearSVG = ({width=16, height=16}) => {
    return <img width={height} height={width} src={logo} alt="near"/>
};

export default NearSVG;