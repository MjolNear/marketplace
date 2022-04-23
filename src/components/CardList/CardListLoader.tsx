import CardLoader from "../Card/CardLoader";
import React from "react";
import CardsGridContainer from "../Common/Grid/CardsGridContainer";

/**
 * Returns NFT card skeleton loader component
 */
const CardListLoader = React.memo(() => {
    return (
        <CardsGridContainer>
            {new Array(12)
                .fill(0)
                .map((_, i) =>
                    <CardLoader key={i}/>
                )
            }
        </CardsGridContainer>
    )
});

export default CardListLoader