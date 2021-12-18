import React from 'react';

const ExploreNftContainer = ({children}) => {
    return (
        <div className="flex flex-col rounded-3xl ring-1 ring-light_blue
        justify-between bg-white h-full duration-500 ease-out transform hover:scale-105">
            {children}
        </div>
    );
};

export default ExploreNftContainer;