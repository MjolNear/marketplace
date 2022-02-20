import React from 'react';

interface OwnerBlockProps {
    ownerId: string
}

const OwnerBlock = React.memo<OwnerBlockProps>(({ownerId}) => {
    return (
        <div className="font-archivo text-md inline-flex gap-1">
            <div className="text-gray-700">Owned by</div>
            <div className="font-semibold">{ownerId}</div>
        </div>
    );
});

export default OwnerBlock;