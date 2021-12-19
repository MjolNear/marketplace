import React from 'react';
import NftMintedLink from "./ui/NftMintedLink";
import NftPrice from "./ui/NftPrice";
import TitleCollectionGroup from "./ui/TitleCollectionGroup";

const NftFooter = ({nft}) => {
    return (
        <div>
            <div className="pl-6 pb-1 space-y-6">
                <TitleCollectionGroup nft={nft}/>
                <NftPrice price={0.239}/>
            </div>
            <div className="flex justify-end pr-2 xs:pr-4 pb-2 text-xs">
                <NftMintedLink mintedLink='https://www.mjolear.com/' mintedName="MjolNear"/>
            </div>
        </div>
    );
};

export default NftFooter;