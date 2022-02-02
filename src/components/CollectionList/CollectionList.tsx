import React from 'react';
import {Collection} from "../../business-logic/models/collection";
import CollectionCard from "../Collection/CollectionCard";
import CardsGridContainer from "../Common/Grid/CardsGridContainer";

interface PropTypes {
    collections: Collection[]
}

const CollectionList: React.FC<PropTypes> = ({collections}) => {
    return (
        <CardsGridContainer>
            {collections.map(
                collection => (
                    <CollectionCard collection={collection}
                                    key={collection.collection_id}
                    />
                ))
            }
        </CardsGridContainer>
    )
}

export default CollectionList;