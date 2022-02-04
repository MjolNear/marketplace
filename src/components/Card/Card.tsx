import React from 'react';
import SquareImageBlock from "./Blocks/SquareImageBlock";
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
    const previewLink = `/nfts/${nft.contractId}/${nft.tokenId}`
    return (
        <div className="flex flex-col justify-between overflow-hidden w-full rounded-xl
                        ring-1 ring-blue-300 select-none
                        transform hover:shadow-mjol-blue-300-md hover:-translate-y-[1px]"
        >
            <Link to={previewLink}>
                <SquareImageBlock path={nft.mediaURL} scrollPosition={scrollPosition}/>
            </Link>
            <div className="px-2 xxs:px-5 mt-1">
                <div className="flex flex-col mb-4">
                    <Link to={previewLink}>
                        <TitleBlock title={nft.title}/>
                    </Link>
                    <Link to="MOCK">
                        <CollectionBlock name="Mock collection"/>
                    </Link>
                </div>
                <MintedBlock market={nft.mintSite?.name} link={nft.mintSite?.nftLink}/>
                <PriceBlock price={nft.price}/>
            </div>
        </div>
    );
};

export default Card;