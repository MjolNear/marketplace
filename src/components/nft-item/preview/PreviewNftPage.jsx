import React from 'react';

import PreviewNftImage from "./image/PreviewNftImage";
import NftInfo from "./details/NftInfo";

const PreviewNftPage = ({nft}) => {
    if (!nft) {
        return <div className="text-center">Loading</div>
    }
    return (
        <div className="bg-light_white
                        grid md:grid-cols-2 gap-10
                        p-5 lg:p-10
                        items-start
                        h-screen"
        >
            <PreviewNftImage link={nft.mediaURL}/>
            <NftInfo nft={nft}/>
        </div>
    );
};

export default PreviewNftPage;