import React from 'react';

import logo from '../../../assets/logo-white.svg';

const NftPrice = ({price}) => {
    return (
        <div className="flex items-center">
            <p className="text-green-400 text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl">
                {price}
            </p>
            <div className="w-8 lg:w-10">
                <img src={logo} alt="near"/>
            </div>
        </div>
    );
};

export default NftPrice;