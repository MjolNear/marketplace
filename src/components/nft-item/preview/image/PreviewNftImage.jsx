import React from 'react';

const PreviewNftImage = ({link}) => {
    return (
        <div className="justify-self-center md:justify-self-end">
            <img src={link}
                 alt="media not supported"
                 className="max-h-xl"
            />
        </div>
    );
};

export default PreviewNftImage;