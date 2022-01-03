import React from 'react';

const NftTitle = ({title}) => {
    return (
        <div className="font-mono font-extrabold text-dark-purple truncate
                        text-sm md:text-md 2xl:text-lg">
            {title}
        </div>
    );
};

export default NftTitle;