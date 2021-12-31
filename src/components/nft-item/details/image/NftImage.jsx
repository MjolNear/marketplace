import React from 'react';
import NftBorderLine from "../ui/NftBorderLine";

const NftImage = ({path}) => {
    return (
        <div className="px-6 py-3 space-y-1 group transform ease-out duration-1000 hover:scale-105">
            <div className="xs:h-72 2xl:h-80 grid place-items-center">
                <img src={path}
                     alt="not found...😔"
                     className="rounded-2xl xs:max-h-72 2xl:max-h-80"
                />
            </div>
            <NftBorderLine className="group-hover:bg-purple-400"/>
        </div>
    );
};

export default NftImage;