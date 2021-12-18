import React from 'react';

const NftImage = ({path}) => {
    return (
        <div className="p-4">
            <div className="ring-1 rounded-3xl">
                <img src={path} alt="loading..." className="rounded-3xl"/>
            </div>
        </div>
    );
};

export default NftImage;