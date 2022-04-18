import React from 'react';
import {PropsWithChildren} from "../../types";

const CardsGridContainer: React.FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <div className="grid grid-cols-1 xxs:grid-cols-[repeat(auto-fit,_300px)] justify-center
                        gap-4 md:gap-5 2xl:gap-8 px-8 md:px-5"
        >
            {children}
        </div>
    );
};

export default CardsGridContainer;