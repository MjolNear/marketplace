import React, {memo} from 'react';
import PreviewTokenCard from "./PreviewTokenCard";
import PreviewCreatedItemContainer from "./PreviewCreatedItemContainer";

interface PreviewMintedTokenProps {
    title: string,
    url: string,
    collectionName?: string
}

const PreviewToken: React.FC<PreviewMintedTokenProps> = ({
    title,
    url,
    collectionName,
}) => {
    return (
        <PreviewCreatedItemContainer>
            <PreviewTokenCard title={title} url={url} collectionName={collectionName}/>
        </PreviewCreatedItemContainer>
    );
};

export default memo(PreviewToken);