import React from 'react';
import NftTitle from "../title/NftTitle";
import NftCollectionLink from "../collection/NftCollectionLink";

const TitleCollectionGroup = ({title, collectionName, collectionLink}) =>
    (<div className="py-1 space-y-1">
        <NftTitle title={title}/>
        <NftCollectionLink
            collectionLogoLink="https://lh3.googleusercontent.com/LWhywvNVMddohKKZbuKEGV6D92TE6gjA5FCHDZhPgRDdn9HPIFB4x07mFJrZJrZPDSuZQhNqEyGLZM-BfBMcnMvu-IeLq_VedKyZEg=w600"
            collectionLink={collectionLink}
            collectionName={collectionName}
        />
    </div>);

export default TitleCollectionGroup;