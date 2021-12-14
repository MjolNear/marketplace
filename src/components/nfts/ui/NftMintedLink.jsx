import React from 'react';
import {Link} from "react-router-dom";

const NftMintedLink = ({mintedName, mintedLink}) => {
    return (
        <div className="text-pink-200 text-xs underline float-right">
            <Link to={mintedLink}>Minted on {mintedName}</Link>
        </div>
    );
};

export default NftMintedLink;