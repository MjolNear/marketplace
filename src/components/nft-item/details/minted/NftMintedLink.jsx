import React from 'react';

const NftMintedLink = ({mintedName, mintedLink}) => {
    return (
        <a className="text-mjol-purple-dark font-bold text-tiny-4 hover:text-mjol-purple-base"
           href={mintedLink}
           target="_blank"
        >
            { mintedName === 'unsupported contract' ? 'Not verified' : `Minted on ${mintedName}`}
        </a>
    );
};

export default NftMintedLink;