import React from 'react';

const CardsGridContainer: React.FC = ({children}) => {
    return (
        <div className="grid gap-6 lg:gap-7 2xl:gap-10 justify-center
                        grid-cols-1
                        xxs:grid-cols-1-300px
                        sm:grid-cols-2-300px
                        lg:grid-cols-3-300px
                        xl:grid-cols-4-300px"
        >
            {children}
        </div>
    );
};

export default CardsGridContainer;