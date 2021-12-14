import React from 'react';
import NftImage from "./NftImage";
import ExploreNftContainer from "./ExploreNftContainer";
import NftFooter from "./NftFooter";

const NftItem = ({nft}) => {
    return (
        <ExploreNftContainer>
            <NftImage path={nft.url}/>
            <NftFooter title={nft.title} price={0.342}/>
        </ExploreNftContainer>
    );
};

export default NftItem;