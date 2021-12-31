import React from 'react';
import {Link} from "react-router-dom";

const NftMintedLink = ({mintedName, mintedLink}) => {
    const link = mintedLink.startsWith('https://')
        ? `//${mintedLink.substr(8)}`
        : mintedLink
    return (
        <Link className="text-light_white text-xs truncate hover:underline font-medium"
              to={link}
        >
            Minted on {mintedName}
        </Link>
    );
};

export default NftMintedLink;