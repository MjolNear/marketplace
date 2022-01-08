import React from 'react';

const NftImage = ({path}) => {
    return (
        <div className="aspect-w-1 aspect-h-1 justify-center">
            <img src={path}
                 alt="media not supported"
                 className="object-contain"
            />
        </div>
    );
};

export default NftImage;