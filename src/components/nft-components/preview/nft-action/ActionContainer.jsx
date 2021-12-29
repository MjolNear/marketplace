import React from 'react';

const ActionContainer = ({children}) => {
    return (
        <div className="rounded-lg bg-gray-200">
            {children}
        </div>
    );
};

export default ActionContainer;