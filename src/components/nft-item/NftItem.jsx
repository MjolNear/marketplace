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
        <NftBoxContainer previewLink={previewLink}>
            <NftImage path={nft.mediaURL}/>
            <div className="px-4 md:pl-6 py-2 space-y-1">
                <TitleCollectionGroup title={nft.title}
                                      collectionName={"Mock"}
                                      collectionLink={"Mock collection"}
                />
                <div className="pb-3">
                    <div className="grid place-items-end">
                        <NftMintedLink mintedName={nft.mintSite.name}
                                       mintedLink={nft.mintSite.nftLink}/>
                    </div>
                    <hr className="ring-1 ring-dark-purple border-none"/>
                </div>
                <SmallNftPrice price={nft.price} isListed={isListed}/>
            </div>
        </NftBoxContainer>
    );
};

export default NftItem;