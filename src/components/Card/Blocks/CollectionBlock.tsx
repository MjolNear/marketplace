import React from 'react';

interface TCollectionBlockProps {
    name: string,
}

const CollectionBlock: React.FC<TCollectionBlockProps> = ({name}) => {
    return (
        <div className="text-xs font-semibold font-archivo truncate text-white opacity-75 hover:opacity-90">
            {name}
        </div>
    );
};

export default CollectionBlock;