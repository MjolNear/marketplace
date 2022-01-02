import React from 'react';
import NftImage from "./details/image/NftImage";
import NftBoxContainer from "./NftBoxContainer";
import TitleCollectionGroup from "./details/ui/TitleCollectionGroup";
import SmallNftPrice from "./details/price/SmallNftPrice";
import NftMintedLink from "./details/minted/NftMintedLink";

const NftItem = ({nft}) => {
    const previewPath = `/nft/${nft.contractId}/${nft.tokenId}`
    return (
        <NftBoxContainer>
            <div>
                <NftImage path={nft.mediaURL} previewPath={previewPath}/>
                <div className="pl-4 pr-4 md:pl-6 pt-2 space-y-4">
                    <TitleCollectionGroup title={nft.title}
                                          collectionName={"Mock"}
                                          collectionLink={"Mock collection"}
                    />
                    <SmallNftPrice price={nft.price} isListed={nft.isListed()}/>
                </div>
            </div>
            <div
                className="rounded-b-3xl bg-gradient-to-t from-blue-900 to-light_blue
                           grid place-items-end mt-1 py-1 pr-4"
            >
                <NftMintedLink mintedName={nft.mintSite.name}
                               mintedLink={nft.mintSite.nftLink}
                />
            </div>
        </NftBoxContainer>
    );
};

export default NftItem;