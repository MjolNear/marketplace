import React from 'react';


const NftBoxContainer = ({children}) => {
    return (
        <div className="flex flex-col justify-between rounded-3xl ring-inset ring-2 ring-light_blue
                        bg-gradient-to-b from-cyan-50 to-white"
        >
            {children}
        </div>
    );
};

export default NftBoxContainer;