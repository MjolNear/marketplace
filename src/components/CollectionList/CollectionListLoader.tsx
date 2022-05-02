import React from 'react';
import CardsGridContainer from "../Common/Grid/CardsGridContainer";
import CollectionCardLoader from "../Collection/CollectionCardLoader";
import CardLoader from "../Card/CardLoader";

const CollectionListLoader = () => {
    return (
        <CardsGridContainer>
            {new Array(12)
                .fill(0)
                .map((_, i) =>
                    <CollectionCardLoader key={i}/>
                )
            }
        </CardsGridContainer>
    );
};

export default CollectionListLoader;