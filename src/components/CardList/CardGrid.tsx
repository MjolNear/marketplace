import Card from "../Card/Card";
import React from "react";
import {Nft} from "../../business-logic/models/nft";
import CardsGridContainer from "./CardsGridContainer";
import {ScrollPosition} from "react-lazy-load-image-component";
import {buildUID} from "../../business-logic/near/api/utils";

interface PropTypes {
    nfts: Nft[],
    scrollPosition?: ScrollPosition
}

/**
 * Returns NFT items grid component
 *
 * @param nfts array of {@link Nft} items
 * @param scrollPosition
 */
const CardGrid: React.FC<PropTypes> = ({nfts, scrollPosition}) => {
    return (
        <CardsGridContainer>
            {nfts.map(nft => {
                    const uid = buildUID(nft.contractId, nft.tokenId)
                    return <Card key={uid} nft={nft} scrollPosition={scrollPosition}/>
                }
            )}
        </CardsGridContainer>
    )
};

export default CardGrid;
