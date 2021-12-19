import React from 'react';

const ExploreNftContainer = ({children}) => {
    return (
        <div className="flex flex-col rounded-3xl ring-2 ring-light_blue
        justify-between bg-white h-full">
            {children}
        </div>
    );
};

export default ExploreNftContainer;