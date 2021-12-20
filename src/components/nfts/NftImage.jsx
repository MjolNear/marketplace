import React from 'react';
import NftBorderLine from "./ui/NftBorderLine";

const NftImage = ({path}) => {
    return (
        <div className="px-6 space-y-3">
            <div className="mt-4 xs:h-72 2xl:h-80 grid place-items-center">
                <img src={path}
                     alt="not found...😔"
                     className="rounded-2xl max-h-72 2xl:h-80 transform ease-out duration-1000 hover:scale-105"
                />
            </div>
            <NftBorderLine/>
        </div>
    );
};

export default NftImage;