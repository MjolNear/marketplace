import React from 'react';

const PreviewNftImage = ({link}) => {
    return (
        <div className="justify-self-center md:justify-self-end">
            <img src={link}
                 alt="loading..."
                 className="rounded-3xl max-h-xl"
            />
        </div>
    );
};

export default PreviewNftImage;