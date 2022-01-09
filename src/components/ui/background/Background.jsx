import React from 'react';

const Background = ({children}) => {
    return (
        <div
            className="bg-gradient-to-br from-purple-300 to-blue-400"
        >
            {children}
        </div>
    );
};

export default Background;