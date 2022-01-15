import Card from "../Card/Card";
import React from "react";
import {Nft} from "../../business-logic/models/nft";
import ItemsGridContainer from "./ItemsGridContainer";
import {ScrollPosition} from "react-lazy-load-image-component";

interface PropTypes {
    nfts: Nft[],
    scrollPosition?: ScrollPosition
}

const CardGrid: React.FC<PropTypes> = ({nfts, scrollPosition}) => {
    return (
        <ItemsGridContainer>
            {nfts.map(nft =>
                <Card key={nft.tokenId + nft.contractId} nft={nft} scrollPosition={scrollPosition}/>
            )}
        </ItemsGridContainer>
    )
};

export default CardGrid;
