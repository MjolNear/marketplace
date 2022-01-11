import React from 'react';

const NftContractNotSupported = () => {
    return (
        <div className="text-center rounded-2xl bg-gray-900 p-2 font-medium text-md md:text-lg text-blue-300">
            Nft contract not supported
            <div className="text-xs text-blue-900">
                See here for more information about supported NFTs.
            </div>
        </div>
    );
};

export default NftContractNotSupported;