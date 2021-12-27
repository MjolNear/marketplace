import React from 'react';

const NftTitle = ({title}) => {
    return (
        <div className="font-mono font-extrabold text-black truncate
                        text-sm md:text-md xl:text-lg 2xl:text-2xl">
            {title}
        </div>
    );
};

export default NftTitle;