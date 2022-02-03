import React from 'react';
import CardsGridContainer from "../Common/Grid/CardsGridContainer";
import CollectionCardLoader from "../Collection/CollectionCardLoader";

const CollectionListLoader = () => {
    return (
        <CardsGridContainer>
            <CollectionCardLoader/>
            <CollectionCardLoader className="hidden sm:block"/>
            <CollectionCardLoader className="hidden lg:block"/>
            <CollectionCardLoader className="hidden xl:block"/>
        </CardsGridContainer>
    );
};

export default CollectionListLoader;