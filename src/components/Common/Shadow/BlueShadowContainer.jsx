import React from 'react';

const BlueShadowContainer = ({children}) => {
    return (
        <div className="overflow-x-hidden w-full">
            <div className="shadow-mjol-base-blue-drop-xl pt-10 mb-12">
                {children}
            </div>
        </div>
    );
};

export default BlueShadowContainer;