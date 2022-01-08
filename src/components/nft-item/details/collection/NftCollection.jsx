import React from 'react';
import {Link} from "react-router-dom";

const NftCollection = ({collectionName, collectionLink}) => {
    return (
        <Link className="text-sm font-medium truncate text-mjol-purple-dark-t hover:underline"
              to={collectionLink}
        >
            {collectionName}
        </Link>
    );
};

export default NftCollection;