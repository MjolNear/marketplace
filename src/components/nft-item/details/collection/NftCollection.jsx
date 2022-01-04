import React from 'react';
import {Link} from "react-router-dom";

const NftCollection = ({collectionName, collectionLink}) => {
    return (
        <Link className="text-xs xs:text-sm lg:text-md font-mono font-medium truncate
                         text-mjol-purple-dark-t hover:underline"
              to={collectionLink}
        >
            {collectionName}
        </Link>
    );
};

export default NftCollection;