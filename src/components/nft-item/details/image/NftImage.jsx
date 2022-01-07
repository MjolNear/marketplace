import React from 'react';
import {Link} from "react-router-dom";

const NftImage = ({path, previewLink}) => {
    return (
        <div className="aspect-w-1 aspect-h-1 mb-1">
        <Link to={previewLink}
              className="flex justify-center"
        >
            <img src={path}
                 alt="not found...😔"
                 className="object-contain"
            />
        </Link>
        </div>
    );
};

export default NftImage;