import React from 'react';

const NftCollectionContainer = ({children}) => {
    return (
        <div className="grid gap-8 sm:gap-10
                        grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 ">
            {children}
        </div>
    );
};

export default NftCollectionContainer;