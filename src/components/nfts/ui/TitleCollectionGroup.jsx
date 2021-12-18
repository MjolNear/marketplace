import React from 'react';
import NftTitle from "./NftTitle";
import NftCollectionLink from "./NftCollectionLink";

const TitleCollectionGroup = ({nft}) => {
    return (
        <div className="py-1 space-y-1">
            <NftTitle title={nft.title}/>
            <NftCollectionLink collectionLogoLink="https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif"
                               collectionLink='https://google.com/'
                               collectionName={nft.description}
            />
        </div>
    );
};

export default TitleCollectionGroup;