import React from 'react';


const NftBoxContainer = ({children}) => {
    return (
        <div className="flex flex-col justify-between rounded-3xl ring-2 ring-super-light-blue
                        shadow-light-blue bg-white"
        >
            {children}
        </div>
    );
};

export default NftBoxContainer;