import React from 'react';

const NftImage = ({path}) => {
    return (
        <div className="p-4">
            <div className="ring-2 rounded-3xl ring-green-100">
                <img src={path} alt="loading..." className="rounded-3xl"/>
            </div>
        </div>
    );
};

export default NftImage;