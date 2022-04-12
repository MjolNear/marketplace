import React from 'react';
import {GridCollection} from "../../business-logic/types/collection";
import CollectionCard from "../Collection/CollectionCard";
import CardsGridContainer from "../Common/Grid/CardsGridContainer";
import EmptyCardList from "../CardList/EmptyCardList";

interface TCollectionsGridProps {
    collections: GridCollection[],
    loading: boolean,
}

const CollectionsGrid: React.FC<TCollectionsGridProps> = ({
    collections,
    loading,
}) => {
    return (
        <>{
            collections.length === 0 && !loading
                ? <EmptyCardList mainDescription="No collections found"/>
                : <CardsGridContainer>
                    {collections.map(
                        collection => (
                            <CollectionCard key={collection.collectionId}
                                            {...collection}

                            />
                        ))
                    }
                </CardsGridContainer>
        }
        </>
    )
}

export default CollectionsGrid;