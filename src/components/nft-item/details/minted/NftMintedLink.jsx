import React from 'react';

const NftMintedLink = ({mintedName, mintedLink}) => {
    return (
        <a className="text-mjol-purple-dark font-semibold hover:text-mjol-purple-base"
           href={mintedLink}
           target="_blank"
        >
            Minted on {mintedName}
        </a>
    );
};

export default NftMintedLink;