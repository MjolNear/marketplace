import React from 'react';
import NftImage from "./details/image/NftImage";
import NftBoxContainer from "./NftBoxContainer";
import TitleCollectionGroup from "./details/ui/TitleCollectionGroup";
import SmallNftPrice from "./details/price/SmallNftPrice";
import NftMintedLink from "./details/minted/NftMintedLink";

const NftItem = ({nft}) => {
    const previewLink = `/nft/${nft.contractId}/${nft.tokenId}`
    const isListed = nft.isListed()
    return (
        <NftBoxContainer>
            <div>
                <NftImage path={nft.mediaURL} previewLink={previewLink}/>
            </div>
            <div className="rounded-3xl pl-4 md:pl-6 pt-2 space-y-4">
                <TitleCollectionGroup title={nft.title}
                                      collectionName={"Mock"}
                                      collectionLink={"Mock collection"}
                />
                <SmallNftPrice price={nft.price} isListed={isListed}/>
                <div
                    className="rounded-b-3xl grid place-items-end pb-1 pr-4">
                    <NftMintedLink mintedName={nft.mintSite.name}
                                   mintedLink={nft.mintSite.nftLink}
                    />
                </div>
            </div>
        </NftBoxContainer>
    );
};

export default NftItem;