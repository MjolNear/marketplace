import React from 'react';

import PreviewNftImage from "./image/PreviewNftImage";
import NftInfo from "./details/NftInfo";

const PreviewNftPage = ({nft}) => {
    return <div>MOCK</div>
    return (
        <div className="bg-light_white
                        grid md:grid-cols-2 gap-10
                        p-5 lg:p-10
                        items-start
                        h-screen"
        >
            <PreviewNftImage link={nft.media_url}/>
            <NftInfo nft={nft}/>
        </div>
    );
};

export default PreviewNftPage;