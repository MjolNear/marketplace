import React from 'react';

const NftMintedLink = ({mintedName, mintedLink}) => {
    return (
        <a className="text-dark-purple text-xs truncate hover:underline font-medium"
           href={mintedLink}
           target="_blank"
        >
            Minted on {mintedName}
        </a>
    );
};

export default NftMintedLink;