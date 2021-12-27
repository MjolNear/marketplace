import React from 'react';

const NftCollectionContainer = ({children}) => {
    return (
        <div className="grid gap-8 lg:gap-8 xl:gap-10 justify-center auto-rows-min
                        grid-cols-1
                        xs:grid-cols-1nft-300
                        sm:grid-cols-2nft-280
                        md:grid-cols-2nft-300
                        lg:grid-cols-3nft-300
                        2xl:grid-cols-4nft-350">
            {children}
        </div>
    );
};

export default NftCollectionContainer;