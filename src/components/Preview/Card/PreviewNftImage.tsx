import React from 'react';
import {Optional} from "../../../business-logic/models/types";

interface PropTypes {
    link?: Optional<string>,
    imageName: string
}

const PreviewNftImage = React.memo<PropTypes>(({link, imageName}) => {
    return (
        <img src={link || undefined}
             alt={imageName}
             className="object-contain w-full max-h-[600px] max-w-[600px]"
        />
    );
});

export default PreviewNftImage;