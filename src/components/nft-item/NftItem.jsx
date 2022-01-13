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
    const isListed = nft.price !== null
    return (
        <NftBoxContainer>
            <Link to={previewLink} className="pb-1">
                <NftImage path={nft.mediaURL}/>
            </Link>
            <div className="px-5">
                <div className="flex flex-col">
                    <NftTitle title={nft.title} previewLink={previewLink}/>
                    <NftCollection collectionLogoLink="MOCK"
                                   collectionLink="MOCK"
                                   collectionName="Mock collection"/>
                </div>
                <div className="grid items-end">
                    <div className="inline-flex space-x-1 items-center pt-4 pb-1">
                        <NftVerifiedStatus isVerified={nft.mintSite.name !== 'unsupported contract'}/>
                        <NftMintedLink mintedName={nft.mintSite.name}
                                       mintedLink={nft.mintSite.nftLink}/>
                    </div>
                </div>
                <hr className="border-mjol-purple-dark"/>
                <div className="py-2 grid place-items-end">
                    <SmallNftPrice price={nft.price} isListed={isListed}/>
                </div>
            </div>
        </NftBoxContainer>
    );
};

export default NftItem;