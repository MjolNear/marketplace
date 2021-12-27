import React from 'react';

const Container = ({children}) => {
    return (
        <div className="rounded-lg bg-gray-200">
            {children}
        </div>
    );
};

export default Container;