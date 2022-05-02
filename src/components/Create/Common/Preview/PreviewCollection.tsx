import React from 'react';
import PreviewCreatedItemContainer from "./PreviewCreatedItemContainer";
import PreviewCollectionCard from "./PreviewCollectionCard";

interface PreviewCollectionProps {
    title: string,
    ownerId: string
    mediaUrl: string
    description?: string
}

const PreviewCollection: React.FC<PreviewCollectionProps> = (props) => {
    return (
        <PreviewCreatedItemContainer>
            <PreviewCollectionCard {...props}/>
        </PreviewCreatedItemContainer>
    );
};

export default PreviewCollection;