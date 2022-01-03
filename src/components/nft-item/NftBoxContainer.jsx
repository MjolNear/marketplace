import React from 'react';

const NftBoxContainer = ({children}) => {
    return (
        <div className="group flex flex-col justify-between rounded-3xl ring-2 ring-super-light-blue
                        shadow-light-blue bg-white hover:shadow-purple hover:ring-indigo-400">
            {children}
        </div>
    );
};

export default NftBoxContainer;