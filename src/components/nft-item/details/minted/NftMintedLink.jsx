import React from 'react';

const NftMintedLink = ({mintedName, mintedLink}) => {
    return (
        <a className="text-tiny-3 truncate text-dark-purple font-semibold hover:text-purple-600"
           href={mintedLink}
           target="_blank"
        >
            Minted on {mintedName}
        </a>
    );
};

export default NftMintedLink;