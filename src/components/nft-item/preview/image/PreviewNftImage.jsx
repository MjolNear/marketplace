import React from 'react';

const PreviewNftImage = ({link}) => {
    return (
        <div className="justify-self-center md:justify-self-end w-full">
            <img src={link}
                 alt="media not supported"
                 className="w-full max-h-xl object-contain"
            />
        </div>
    );
};

export default PreviewNftImage;