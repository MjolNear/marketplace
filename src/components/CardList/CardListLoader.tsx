import CardLoader from "../Card/CardLoader";
import React from "react";
import CardsGridContainer from "../Common/Grid/CardsGridContainer";

/**
 * Returns NFT card skeleton loader component
 */
const CardListLoader = React.memo(() => {
    return (
        <CardsGridContainer>
            <CardLoader/>
            <CardLoader className="hidden sm:block"/>
            <CardLoader className="hidden lg:block"/>
            <CardLoader className="hidden xl:block"/>
        </CardsGridContainer>
    )
});

export default CardListLoader