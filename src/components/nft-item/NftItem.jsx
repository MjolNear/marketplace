import React from 'react';
import NftImage from "./details/image/NftImage";
import NftBoxContainer from "./NftBoxContainer";
import TitleCollectionGroup from "./details/ui/TitleCollectionGroup";
import NftPrice from "./details/price/NftPrice";
import NftMintedLink from "./details/minted/NftMintedLink";

const NftItem = ({nft, previewPath}) => {
    return (
        <NftBoxContainer>
            <div>
                <NftImage path={nft.media_url} previewPath={previewPath}/>
                <div className="pl-4 pr-4 md:pl-6 pt-2 space-y-4">
                    <TitleCollectionGroup title={nft.title}
                                          collectionName={"Mock"}
                                          collectionLink={"Mock collection"}
                    />
                    {nft.price !== null && <NftPrice price={nft.price}/>}
                </div>
            </div>
            <div
                className="rounded-b-3xl bg-gradient-to-t from-blue-900 to-light_blue
                           grid place-items-end mt-1 py-1 pr-4"
            >
                <NftMintedLink mintedName={nft.mint_site_info.title}
                               mintedLink={nft.mint_site_info.nft_link}
                />
            </div>
        </NftBoxContainer>
    );
};

export default NftItem;