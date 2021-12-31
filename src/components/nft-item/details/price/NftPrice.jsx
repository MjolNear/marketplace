import React from 'react';

import logo from '../../../../resources/logo-black.svg';

const NftPrice = ({price}) => {
    const isListed = price !== null
    return (
        <div className="flex items-center">
            <p className="text-cyan-600 font-extrabold text-md lg:text-lg xl:text-2xl 2xl:text-3xl">
                {isListed ? price : "Not listed"}
            </p>
            {
                isListed &&
                <div className="w-8 lg:w-10">
                    <img src={logo} alt="near"/>
                </div>
            }
        </div>
    );
};

export default NftPrice;