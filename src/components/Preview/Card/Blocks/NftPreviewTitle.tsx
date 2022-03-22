import React, {memo} from 'react';

interface TNftPreviewTitleProps {
    title: string,
    ownerId: string
}

const TokenTitleAndOwner: React.FC<TNftPreviewTitleProps> = ({
    title,
    ownerId
}) => {
    return (
        <div className="font-archivo w-full mb-2 lg:mb-6">
            <div className="font-black text-2xl">
                {title}
            </div>
            <div className="text-md inline-flex gap-1">
                <div className="text-gray-700">Owned by</div>
                <div className="font-semibold">{ownerId}</div>
            </div>
        </div>
    )
};

export default TokenTitleAndOwner;