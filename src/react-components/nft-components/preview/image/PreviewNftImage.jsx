import React from 'react';

const PreviewNftImage = ({link}) => {
    return (
        <div className="flex flex-row justify-center">
            <img src={link}
                 alt="loading..."
                 className="rounded-3xl max-h-96"
            />
        </div>
    );
};

export default PreviewNftImage;