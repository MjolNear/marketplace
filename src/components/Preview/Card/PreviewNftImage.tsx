import React from 'react';
import {Optional} from "../../../business-logic/models/types";

interface PropTypes {
    link?: Optional<string>,
    imageName: string
}

const PreviewNftImage = React.memo<PropTypes>(({link, imageName}) => {
    return (
        <div className="justify-self-center md:justify-self-end w-full max-w-2xl">
            <img src={link || undefined}
                 alt={imageName}
                 className="w-full max-h-xl object-contain"
            />
        </div>
    );
});

export default PreviewNftImage;