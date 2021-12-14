import React from 'react';

const NftCollectionContainer = ({children}) => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-8 sm:m-3 gap-5 sm:gap-10">
            {children}
        </div>
    );
};

export default NftCollectionContainer;