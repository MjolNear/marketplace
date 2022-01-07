import React from 'react';

const NftCollectionContainer = ({children}) => {
    return (
        <div className="grid gap-8 lg:gap-8 xl:gap-10 justify-center auto-rows-min
                        grid-cols-1
                        xxs:grid-cols-1nft-280
                        sm:grid-cols-2nft-280
                        lg:grid-cols-3nft-280
                        xl:grid-cols-4nft-280
                        2xl:grid-cols-4nft-300">
            {children}
        </div>
    );
};

export default NftCollectionContainer;