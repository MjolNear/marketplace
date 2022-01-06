import React from 'react';
import gradient from '../../../resources/background/popup-gradient.jpg'

const PopupGradient = ({children}) => {
    return (
        <div className="rounded-3xl h-full w-full" style={{
            backgroundImage: `url(${gradient})`
        }}>
            {children}
        </div>
    );
};

export default PopupGradient;