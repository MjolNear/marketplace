import React from 'react';
import {GridCollection} from "../../@types/Collection";
import CollectionCard from "../Collection/CollectionCard";
import CardsGridContainer from "../Common/Grid/CardsGridContainer";
import EmptyCardList from "../CardList/EmptyCardList";

interface TCollectionsGridProps {
    collections: GridCollection[],
    loading: boolean,
    isProfileCollections?: boolean
}

const CollectionsGrid: React.FC<TCollectionsGridProps> = ({
    collections,
    loading,
    isProfileCollections
}) => {
    return (
        <>{
            collections.length === 0 && !loading
                ? isProfileCollections
                    ?
                    <EmptyCardList mainDescription="You don’t have any collections yet"
                                   footerDescription="Create first one"
                                   footerLinkName="here"
                                   footerLink="/collections/new"
                    />
                    :
                    <EmptyCardList mainDescription="No collections found"
                                   footerDescription="Create your own collection"
                                   footerLink="/collections/new"
                                   footerLinkName="here"/>

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