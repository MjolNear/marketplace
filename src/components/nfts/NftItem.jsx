import React from 'react';
import NftImage from "./NftImage";
import ExploreNftContainer from "./ExploreNftContainer";
import TitleCollectionGroup from "./ui/TitleCollectionGroup";
import NftPrice from "./ui/NftPrice";
import NftMintedLink from "./ui/NftMintedLink";

const NftItem = ({nft}) => {
    return (
        <ExploreNftContainer>
            <NftImage path={nft.media_url}/>
            <div>
                <div className="pl-4 pr-4 md:pl-6 pt-2">
                    <TitleCollectionGroup nft={nft}/>
                    <NftPrice price={0.239}/>
                </div>
                <div className="flex justify-end pr-4 xs:pr-4 pb-3 text-xs">
                    <NftMintedLink mintedLink='https://www.mjolear.com/' mintedName="MjolNear"/>
                </div>
            </div>
        </ExploreNftContainer>
    );
};

export default NftItem;