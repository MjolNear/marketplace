import React, { memo } from 'react';

const NotListedNftContainer = () => {
    return (
        <div className="rounded-xl px-[24px] py-[18px] bg-mjol-blue-card-property
                        font-bold font-archivo text-md text-gray-700 text-center"
        >
            NFT not listed on the market
        </div>
    );
};

export default memo(NotListedNftContainer);