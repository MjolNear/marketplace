import React from 'react';
import NftImage from "./NftImage";
import ExploreNftContainer from "./ExploreNftContainer";
import NftFooter from "./NftFooter";

const NftItem = ({nft}) => {
    return (
        <ExploreNftContainer>
            <NftImage path={nft.media_url}/>
            <NftFooter nft={nft}/>
        </ExploreNftContainer>
    );
};

export default NftItem;