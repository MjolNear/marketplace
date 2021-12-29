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
                <div className="pl-4 pr-4 md:pl-6 pt-2 space-y-4">
                    <TitleCollectionGroup nft={nft}/>
                    <NftPrice price={0.239}/>
                </div>
                <div
                    className="rounded-b-3xl bg-gradient-to-t from-blue-900 to-light_blue grid place-items-end mt-1 py-1 pr-3">
                    <NftMintedLink mintedLink='https://www.mjolear.com/' mintedName="MjolNear"/>
                </div>
            </div>
        </ExploreNftContainer>
    );
};

export default NftItem;