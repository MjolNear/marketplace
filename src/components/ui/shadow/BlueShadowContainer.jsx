import React from 'react';
import Background from "../background/Background";

const BlueShadowContainer = ({children}) => {
    return (
        // <Background>
            <div className="shadow-mjol-base-blue-drop-xl pt-10"
            >
                {children}
            </div>
        // </Background>
    );
};

export default BlueShadowContainer;