import React from 'react';
import ImageBlock from "./Blocks/ImageBlock";
import MintedBlock from "./Blocks/MintedBlock";
import TitleBlock from "./Blocks/TitleBlock";
import CollectionBlock from "./Blocks/CollectionBlock";
import PriceBlock from "./Blocks/PriceBlock";
import {Nft} from "../../business-logic/models/nft";
import {Link} from "react-router-dom";
import {ScrollPosition} from "react-lazy-load-image-component";

interface PropTypes {
    nft: Nft,
    scrollPosition?: ScrollPosition
}

const Card: React.FC<PropTypes> = ({nft, scrollPosition}) => {

    const previewLink = `/nft/${nft.contractId}/${nft.tokenId}`
    return (
        <div className=" flex flex-col justify-between overflow-hidden w-full rounded-xl bg-white
                        ring-1 ring-blue-200 select-none shadow-mjol-blue-all-xs
                        transform duration-300 hover:ring-blue-400"
        >
            <Link to={previewLink}>
                <ImageBlock path={nft.mediaURL} scrollPosition={scrollPosition}/>
            </Link>
            <div className="px-2 xxs:px-5 mt-1">
                <div className="flex flex-col mb-4">
                    <TitleBlock title={nft.title} previewLink={previewLink}/>
                    <CollectionBlock link="MOCK" name="Mock collection"/>
                </div>
                <MintedBlock market={nft.mintSite?.name} link={nft.mintSite?.nftLink}/>
                <PriceBlock price={nft.price}/>
            </div>
        </div>
    );
};

export default Card;