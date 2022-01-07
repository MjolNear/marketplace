import React from 'react';

import PreviewNftImage from "../../../nft-item/preview/image/PreviewNftImage";
import NftPreviewInfo from "../../../nft-item/preview/details/NftPreviewInfo";

const PreviewNftPage = ({nft, payouts, statusElement}) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 min-h-screen bg-mjol-white p-5 xs:p-10 md:items-start">
            <PreviewNftImage link={nft.mediaURL}/>
            <NftPreviewInfo nft={nft}
                            payouts={payouts}
                            statusElement={statusElement}
            />
        </div>
    );
};

export default PreviewNftPage;