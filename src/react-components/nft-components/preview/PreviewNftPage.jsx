import React from 'react';
import Details from "./details/Details";
import PreviewNftImage from "./image/PreviewNftImage";

const PreviewNftPage = ({nft}) => {
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

export default PreviewNftPage;