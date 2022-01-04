import React from 'react';

const BlueShadowContainer = ({children}) => {
    return (
        <div className="bg-white shadow-mjol-base-blue-xl pt-4">
            {children}
        </div>
    );
};

export default BlueShadowContainer;