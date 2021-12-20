import React from 'react';
import NftBorderLine from "./ui/NftBorderLine";

const NftImage = ({path}) => {
    return (
        <div className="px-4 pt-3 space-y-2">
            <div className="xs:h-72 2xl:h-80 grid place-items-center">
                <img src={path} alt="loading..." className="rounded-2xl max-h-72 2xl:h-80"/>
            </div>
            <NftBorderLine/>
        </div>
    );
};

export default NftImage;