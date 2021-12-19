import React from 'react';
import NftBorderLine from "./ui/NftBorderLine";

const NftImage = ({path}) => {
    return (
        <div className="p-4 space-y-4">
            <div className="ring-1 rounded-3xl duration-500 ease-out transform hover:scale-105">
                <img src={path} alt="loading..." className="rounded-3xl"/>
            </div>
            <NftBorderLine/>
        </div>
    );
};

export default NftImage;