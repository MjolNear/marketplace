import React from 'react';
import NftTitle from "./ui/NftTitle";
import NftMintedLink from "./ui/NftMintedLink";
import NftCollectionLink from "./ui/NftCollectionLink";
import NftPrice from "./ui/NftPrice";

const NftFooter = ({nft}) => {
    return (
        <div>
            <div className="pl-6 pb-1 space-y-6">
                <div className="py-1 space-y-1">
                    <NftTitle title={nft.title}/>
                    <NftCollectionLink collectionLogoLink="https://media.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif"
                                       collectionLink='4'
                                       collectionName={nft.description}
                    />
                </div>
                <NftPrice price={0.239}/>
            </div>
            <div className="flex justify-end pr-4 pb-1 text-xs">
                <NftMintedLink mintedLink='https://www.neasea.com/' mintedName="NeaSea"/>
            </div>
        </div>
    );
};

export default NftFooter;