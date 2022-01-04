import React from 'react';

const NftBoxContainer = ({children}) => {
    return (
        <div className="group flex flex-col justify-between rounded-3xl ring-2 ring-mjol-blue-base
                        shadow-mjol-base-blue bg-white hover:shadow-mjol-base-purple hover:ring-indigo-400">
            {children}
        </div>
    );
};

export default NftBoxContainer;