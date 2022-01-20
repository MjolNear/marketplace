import React from 'react';

const CardsGridContainer: React.FC = ({children}) => {
    return (
        <div className="grid gap-6 lg:gap-7 2xl:gap-10 justify-center
                                 grid-cols-1
                                 xxs:grid-cols-1nft-300
                                 sm:grid-cols-2nft-300
                                 lg:grid-cols-3nft-300
                                 xl:grid-cols-4nft-300"
        >
            {children}
        </div>
    );
};

export default CardsGridContainer;