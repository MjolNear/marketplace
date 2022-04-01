import React from 'react';
import {BlockchainCollection} from "../../business-logic/types/collection";
import CollectionCard from "../Collection/CollectionCard";
import CardsGridContainer from "../Common/Grid/CardsGridContainer";

interface TCollectionListProps {
    collections: BlockchainCollection[]
}

const CollectionList: React.FC<TCollectionListProps> = ({
    collections
}) => {
    return (
        <CardsGridContainer>
            {collections.map(
                collection => (
                    <CollectionCard ownerId={collection.owner_id}
                                    contractId={collection.collection_contract}
                                    collectionId={collection.collection_id}
                                    media={collection.media}
                                    title={collection.title}
                                    description={collection.desc}
                                    key={collection.collection_id}
                    />
                ))
            }
        </CardsGridContainer>
    )
}

export default CollectionList;