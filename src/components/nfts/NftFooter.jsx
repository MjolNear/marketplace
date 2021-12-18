import React from 'react';
import NftMintedLink from "./ui/NftMintedLink";
import NftPrice from "./ui/NftPrice";
import TitleCollectionGroup from "./ui/TitleCollectionGroup";

const NftFooter = ({nft}) => {
    return (
        <div className="pl-6 pb-1 space-y-6">
            <TitleCollectionGroup nft={nft}/>
            <div>
                <NftPrice price={0.239}/>
                <div className="flex justify-end pr-4 pb-1 text-xs">
                    <NftMintedLink mintedLink='https://www.neasea.com/' mintedName="NeaSea"/>
                </div>
            </div>
        </div>
    );
};

export default NftFooter;