import React from 'react';
import {Link} from "react-router-dom";

const NftCollectionLink = ({collectionLogoLink, collectionName, collectionLink}) => {
    return (
        <div className="flex space-x-3 items-center">
            <img src={collectionLogoLink} alt={collectionName} className="rounded-full w-1/12"/>
            <div className="text-sm lg:text-md font-mono font-bold text-nft_collection_purple hover:underline">
                <Link to={collectionLink}>{collectionName}</Link>
            </div>
        </div>
    );
};

export default NftCollectionLink;