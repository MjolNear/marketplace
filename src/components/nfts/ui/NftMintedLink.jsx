import React from 'react';
import {Link} from "react-router-dom";

const NftMintedLink = ({mintedName, mintedLink}) => {
    return (
        <div className="text-purple-600 text-xs underline truncate float-right hover:text-pink-900">
            <Link to={mintedLink}>Minted on {mintedName}</Link>
        </div>
    );
};

export default NftMintedLink;