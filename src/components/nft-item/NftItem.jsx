import React from 'react';
import NftImage from "./details/image/NftImage";
import NftBoxContainer from "./NftBoxContainer";
import SmallNftPrice from "./details/price/SmallNftPrice";
import NftMintedLink from "./details/minted/NftMintedLink";
import NftTitle from "./details/title/NftTitle";
import NftCollection from "./details/collection/NftCollection";

import NftVerifiedStatus from "./details/verified/NftVerifiedStatus";

const NftItem = ({nft}) => {
    const previewLink = `/nft/${nft.contractId}/${nft.tokenId}`
    const isListed = nft.isListed()
    return (
        <NftBoxContainer>
            <NftImage path={nft.mediaURL} previewLink={previewLink}/>
            <div className="px-4 md:pl-6 pb-3 space-y-1">
                <NftTitle title={nft.title}/>
                <NftCollection collectionLogoLink="MOCK"
                               collectionLink="MOCK"
                               collectionName="MOCK"/>
                <div className="pb-3">
                    <div className="grid place-items-end">
                        <div className="inline-flex space-x-1 text-tiny-3 xs:text-tiny-4 2xl:text-sm items-center">
                            <NftMintedLink mintedName={nft.mintSite.name}
                                           mintedLink={nft.mintSite.nftLink}/>
                            {nft.mintSite.name === 'Non-verified contract' ? (
                                <></>
                            ) : (
                                <NftVerifiedStatus/>
                            )
                            }
                        </div>
                    </div>
                    <hr className="ring-1 ring-mjol-purple-dark border-none"/>
                </div>
                <SmallNftPrice price={nft.price} isListed={isListed}/>
            </div>
        </NftBoxContainer>
    );
};

export default NftItem;