import React from 'react';

const NftBorderLine = ({children, ...props}) => {
    return (
        <hr {...props}>
            {children}
        </hr>
    );
};

export default NftBorderLine;