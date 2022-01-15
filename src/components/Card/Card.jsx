import React from 'react';
import ImageBlock from "./Blocks/ImageBlock";
import MintedBlock from "./Blocks/MintedBlock";
import TitleBlock from "./Blocks/TitleBlock";
import CollectionBlock from "./Blocks/CollectionBlock";
import PriceBlock from "./Blocks/PriceBlock";


const Card = ({nft}) => {
    const previewLink = `/nft/${nft.contractId}/${nft.tokenId}`
    const isListed = nft.price !== null
    return (
        <div className="overflow-hidden rounded-xl bg-white ring-1 ring-blue-200 select-none shadow-mjol-blue-all-xs
                        transform duration-300 ease-border-timing hover:shadow-mjol-blue-all-md hover:ring-blue-400"
        >
            <ImageBlock path={nft.mediaURL} previewLink={previewLink}/>
            <div className="px-2 xxs:px-5 mt-1">
                <div className="flex flex-col mb-4">
                    <TitleBlock title={nft.title} previewLink={previewLink}/>
                    <CollectionBlock collectionLogoLink="MOCK"
                                     collectionLink="MOCK"
                                     collectionName="Mock collection"/>
                </div>
                <MintedBlock mintedName={nft.mintSite.name} mintedLink={nft.mintSite.nftLink}/>
                <PriceBlock price={nft.price} isListed={isListed}/>
            </div>
        </div>
    );
};

export default Card;