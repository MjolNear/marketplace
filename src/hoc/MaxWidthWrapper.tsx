import React from 'react';

const MaxWidthWrapper: React.FC = ({children}) => {
    return (
        <div className="max-w-screen-1200px mx-auto">
            {children}
        </div>
    );
};

export default MaxWidthWrapper;