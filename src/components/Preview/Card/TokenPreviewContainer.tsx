import React from 'react';

const TokenPreviewContainer: React.FC = ({
    children
}) => {
    return (
        <div className="max-w-[1200px] mx-auto pt-5 lg:pt-10">
            <div className="max-w-full flex justify-center">
                {children}
            </div>
        </div>
    );
};

export default TokenPreviewContainer;