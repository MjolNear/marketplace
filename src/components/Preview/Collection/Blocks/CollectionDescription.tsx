import React, {memo} from 'react';
import ShowMoreText from "react-show-more-text";

interface CollectionDescriptionProps {
    description: string
}

const CollectionDescription: React.FC<CollectionDescriptionProps> = ({
    description
}) => {
    return (
        <div className="font-archivo text-gray-700 text-[16px] max-w-[600px] lg:max-w-[450px]">
            <ShowMoreText
                lines={3}
                more="read more"
                less="read less"
                anchorClass="text-blue-400"
            >
                {description}
            </ShowMoreText>
        </div>
    );
};

export default memo(CollectionDescription);