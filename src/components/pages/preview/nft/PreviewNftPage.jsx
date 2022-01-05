import React from 'react';

import PreviewNftImage from "../../../nft-item/preview/image/PreviewNftImage";
import NftPreviewInfo from "../../../nft-item/preview/details/NftPreviewInfo";

const PreviewNftPage = ({nft, payouts, actionElement}) => {
    return (
        <div className="bg-light_white
                        grid md:grid-cols-2 gap-8
                        p-5 lg:p-10
                        md:items-start"
        >
            <PreviewNftImage link={nft.mediaURL}/>
            <NftPreviewInfo nft={nft}
                            payouts={payouts}
            />
        </div>
    );
};

export default PreviewNftPage;