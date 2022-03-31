import React, {memo} from 'react';
import PreviewMintedTokenCard from "./PreviewMintedTokenCard";

interface PreviewMintedTokenProps {
    title: string,
    url: string,
    collectionName?: string
}

const PreviewMintedToken: React.FC<PreviewMintedTokenProps> = ({
    title,
    url,
    collectionName,
}) => {
    return (
        <div className="lg:flex-grow-[3] lg:flex-shrink-0 lg:basis-0">
            <div className="lg:ml-10 lg:sticky lg:top-[200px] h-fit w-full flex justify-center">
                <PreviewMintedTokenCard title={title}
                                        url={url}
                                        collectionName={collectionName}/>
            </div>
        </div>
    );
};

export default memo(PreviewMintedToken);