import React from 'react';
import {CollectionId} from "../../business-logic/types/aliases";
import TokenActivityRow from "./Common/TokenActivityRow";
import {TokenActivityRowProps} from "./types";

interface CollectionActivityListProps {
    activities: TokenActivityRowProps[]
    collectionId: CollectionId
    collectionName: string
}

const CollectionActivityList: React.FC<CollectionActivityListProps> = ({
    activities,
    collectionId,
    collectionName
}) => {

    return (
        <>
            {activities.map(activity => (
                <TokenActivityRow key={activity.id}
                                  {...activity}
                                  collectionId={collectionId}
                                  collectionName={collectionName}
                />
            ))}
        </>
    )
};

export default CollectionActivityList;