import React from 'react';
import {Link} from "react-router-dom";

const NftMintedLink = ({mintedName, mintedLink}) => {
    return (
        <div className="text-light_white text-xs truncate hover:underline font-medium">
            <Link to={mintedLink}>Minted on {mintedName} ⚡️</Link>
        </div>
    );
};

export default NftMintedLink;