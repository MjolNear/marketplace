import React from 'react';
import PreviewNftImage from "./image/Image";
import Details from "./details/Details";

const PreviewNft = ({nft}) => {
    return (
        <div className="bg-light_white
                        grid md:grid-cols-2 gap-10
                        p-5 lg:p-10
                        items-start
                        h-screen
                        ">
            <PreviewNftImage link={nft.media_url}/>
            <Details nft={nft}/>
        </div>
    );
};

export default PreviewNft;

