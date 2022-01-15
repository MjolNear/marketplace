import Card from "../Card/Card";
import React from "react";
import {Nft} from "../../business-logic/models/nft";
import ItemsGridContainer from "./ItemsGridContainer";

interface PropTypes {
    nfts: Nft[],
}

const CardGrid: React.FC<PropTypes> = ({nfts}) => {
    return (
        <ItemsGridContainer>
            {nfts.map(nft =>
                <Card key={nft.tokenId + nft.contractId} nft={nft}/>
            )}
        </ItemsGridContainer>
    )
};

export default CardGrid;
