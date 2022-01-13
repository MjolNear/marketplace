import React from 'react';

const NftMintedLink = React.memo(({mintedName, mintedLink}) => {
    return (
        <a className="text-mjol-purple-dark font-bold text-tiny-4 hover:text-purple-900"
           href={mintedLink}
           target="_blank"
        >
            {mintedName === 'unsupported contract' ? 'Not verified' : `Minted on ${mintedName}`}
        </a>
    );
});

export default NftMintedLink;