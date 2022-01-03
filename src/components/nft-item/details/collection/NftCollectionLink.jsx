import React from 'react';
import {Link} from "react-router-dom";

const NftCollectionLink = ({collectionName, collectionLink}) => {
    return (
        <Link className="text-xs xs:text-sm lg:text-md font-mono font-medium truncate
                             text-nft_collection_purple hover:underline"
              to={collectionLink}
        >
            {collectionName}
        </Link>
    );
};

export default NftCollectionLink;