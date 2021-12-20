import React from 'react';
import NftTitle from "./NftTitle";
import NftCollectionLink from "./NftCollectionLink";

const TitleCollectionGroup = ({nft}) => {
    return (
        <div className="py-1 space-y-1">
            <NftTitle title={nft.title}/>
            <NftCollectionLink collectionLogoLink="https://lh3.googleusercontent.com/LWhywvNVMddohKKZbuKEGV6D92TE6gjA5FCHDZhPgRDdn9HPIFB4x07mFJrZJrZPDSuZQhNqEyGLZM-BfBMcnMvu-IeLq_VedKyZEg=w600"
                               collectionLink='https://google.com/'
                               collectionName="Mock collection"
            />
        </div>
    );
};

export default TitleCollectionGroup;