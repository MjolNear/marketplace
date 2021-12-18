import React from 'react';

const NftTitle = ({title}) => {
    return (
        <div className="text-md md:text-lg xl:text-2xl 2xl:text-3xl font-mono font-extrabold text-black">
            {title}
        </div>
    );
};

export default NftTitle;