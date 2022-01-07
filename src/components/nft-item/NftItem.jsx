import React from 'react';
import NftImage from "./details/image/NftImage";
import NftBoxContainer from "./NftBoxContainer";
import SmallNftPrice from "./details/price/SmallNftPrice";
import NftMintedLink from "./details/minted/NftMintedLink";
import NftTitle from "./details/title/NftTitle";
import NftCollection from "./details/collection/NftCollection";

import NftVerifiedStatus from "./details/verified/NftVerifiedStatus";
import {Link} from "react-router-dom";

const NftItem = ({nft}) => {
    const previewLink = `/nft/${nft.contractId}/${nft.tokenId}`
    const isListed = nft.isListed()
    return (
        <NftBoxContainer>
            <Link to={previewLink}>
                <NftImage path={nft.mediaURL}/>
                <div className="px-5">
                    <NftTitle title={nft.title}/>
                    <NftCollection collectionLogoLink="MOCK"
                                   collectionLink="MOCK"
                                   collectionName="MOCK"/>
                    <div className="grid place-items-end">
                        <div className="inline-flex space-x-1 text-tiny-2 xs:text-tiny-3 2xl:text-tiny-4 items-center">
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
                    <div className="py-2">
                        <SmallNftPrice price={nft.price} isListed={isListed}/>
                    </div>
                </div>
            </Link>
        </NftBoxContainer>
    );
};

export default NftItem;