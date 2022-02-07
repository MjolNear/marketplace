import React from 'react';

const CardsGridContainer: React.FC = ({children}) => {
    return (
            <div className="grid grid-cols-1 xs:grid-cols-[repeat(auto-fit,_300px)] justify-center
                            gap-6 lg:gap-7 2xl:gap-10 px-4"
            >
                {children}
            </div>
    );
};

export default CardsGridContainer;